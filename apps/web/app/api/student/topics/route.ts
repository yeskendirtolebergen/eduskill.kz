import { NextResponse } from "next/server";
import { jwtVerify } from "jose";
import { prisma } from "../../../../lib/prisma";

function getToken(cookie: string) {
  const m = cookie.match(/eduskill_token=([^;]+)/);
  return m ? decodeURIComponent(m[1]) : null;
}

export async function GET(req: Request) {
  const token = getToken(req.headers.get("cookie") || "");
  const secret = process.env.AUTH_SECRET;
  if (!token || !secret) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { payload } = await jwtVerify(token, new TextEncoder().encode(secret));
  const userId = String(payload.sub);
  const role = (payload as any)?.role;

  if (role !== "STUDENT") return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const student = await prisma.studentProfile.findUnique({
    where: { studentId: userId },
    select: { schoolId: true },
  });
  if (!student) return NextResponse.json({ topics: [] }, { status: 200 });

  const schoolTopics = await prisma.schoolTopic.findMany({
    where: { schoolId: student.schoolId },
    select: { topic: { select: { id: true, title: true, orderIndex: true } } },
    orderBy: { topic: { orderIndex: "asc" } },
  });

  const progress = await prisma.topicProgress.findMany({
    where: { studentId: userId },
    select: { topicId: true, bestScore: true, passedAt: true },
  });

  const progressMap = new Map(progress.map((p) => [p.topicId, p]));

  // Unlock rule: only first topic unlocked; next unlocked if previous passed (>=70)
  const topics = schoolTopics.map((st) => {
    const p = progressMap.get(st.topic.id);
    return {
      ...st.topic,
      bestScore: p?.bestScore ?? 0,
      passed: (p?.bestScore ?? 0) >= 70,
    };
  });

  let unlocked = true;
  const withLock = topics.map((t, idx) => {
    const item = { ...t, unlocked };
    unlocked = unlocked && item.passed; // only unlock next if current passed
    return item;
  });

  return NextResponse.json({ topics: withLock }, { status: 200 });
}

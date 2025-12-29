import { NextResponse } from "next/server";
import { jwtVerify } from "jose";
import { prisma } from "../../../../../lib/prisma";

const SCORE = {
  EASY: { ok: 5, fail: -3 },
  MEDIUM: { ok: 7, fail: -5 },
  HARD: { ok: 10, fail: -7 },
};

function getToken(cookie: string) {
  const m = cookie.match(/eduskill_token=([^;]+)/);
  return m ? decodeURIComponent(m[1]) : null;
}

export async function POST(req: Request) {
  const token = getToken(req.headers.get("cookie") || "");
  const secret = process.env.AUTH_SECRET;
  if (!token || !secret)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { payload } = await jwtVerify(token, new TextEncoder().encode(secret));
  const studentId = String(payload.sub);

  const { questionId, topicId, answer, currentScore } = await req.json();

  const q = await prisma.question.findUnique({ where: { id: questionId } });
  if (!q) return NextResponse.json({ error: "Question not found" }, { status: 404 });

  const correct =
    q.type === "TEST"
      ? q.correctOption === answer
      : String(q.correctAnswer) === String(answer);

  const delta = correct ? SCORE[q.difficulty].ok : SCORE[q.difficulty].fail;
  const newScore = Math.max(0, currentScore + delta);

  await prisma.topicProgress.upsert({
    where: { studentId_topicId: { studentId, topicId } },
    update: {
      bestScore: { set: Math.max(newScore, q.difficulty ? newScore : 0) },
      passedAt: newScore >= 70 ? new Date() : undefined,
    },
    create: {
      studentId,
      topicId,
      bestScore: newScore,
      passedAt: newScore >= 70 ? new Date() : null,
    },
  });

  return NextResponse.json({
    correct,
    delta,
    newScore,
    passed: newScore >= 70,
  });
}

import { NextResponse } from "next/server";
import { jwtVerify } from "jose";
import { prisma } from "../../../../../lib/prisma";

function getToken(cookie: string) {
  const m = cookie.match(/eduskill_token=([^;]+)/);
  return m ? decodeURIComponent(m[1]) : null;
}

function difficultyByScore(score: number) {
  if (score <= 40) return "EASY";
  if (score <= 70) return "MEDIUM";
  return "HARD";
}

export async function POST(req: Request) {
  const token = getToken(req.headers.get("cookie") || "");
  const secret = process.env.AUTH_SECRET;
  if (!token || !secret)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { payload } = await jwtVerify(token, new TextEncoder().encode(secret));
  if ((payload as any)?.role !== "STUDENT")
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const { topicId, score } = await req.json();
  const difficulty = difficultyByScore(score);

  const questions = await prisma.question.findMany({
    where: { topicId, difficulty },
  });

  if (!questions.length)
    return NextResponse.json({ done: true });

  const q = questions[Math.floor(Math.random() * questions.length)];

  return NextResponse.json({
    id: q.id,
    text: q.text,
    options: q.options,
    difficulty,
    type: q.type,
  });
}

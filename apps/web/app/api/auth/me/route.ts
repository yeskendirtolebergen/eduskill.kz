import { NextResponse } from "next/server";
import { jwtVerify } from "jose";
import { prisma } from "../../../../lib/prisma";

export async function GET(req: Request) {
  const cookie = req.headers.get("cookie") || "";
  const match = cookie.match(/eduskill_token=([^;]+)/);
  if (!match) return NextResponse.json({ user: null }, { status: 200 });

  const token = decodeURIComponent(match[1]);
  const secret = process.env.AUTH_SECRET;
  if (!secret) return NextResponse.json({ user: null }, { status: 200 });

  try {
    const { payload } = await jwtVerify(token, new TextEncoder().encode(secret));
    const userId = String(payload.sub);

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        role: true,
        studentProfile: {
          select: { firstName: true, lastName: true, grade: true, city: true, school: { select: { id: true, name: true } } },
        },
      },
    });

    return NextResponse.json({ user }, { status: 200 });
  } catch {
    return NextResponse.json({ user: null }, { status: 200 });
  }
}

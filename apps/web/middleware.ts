import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const ROLE_HOME: Record<string, string> = {
  ADMIN: "/admin",
  TEACHER: "/teacher",
  STUDENT: "/student",
};

function getToken(req: NextRequest) {
  const token = req.cookies.get("eduskill_token")?.value;
  return token || null;
}

function decodeRole(req: NextRequest): string | null {
  const token = getToken(req);
  if (!token) return null;

  const secret = process.env.AUTH_SECRET;
  if (!secret) return null;

  try {
    const payload = jwt.verify(token, secret) as any;
    return payload?.role ?? null;
  } catch {
    return null;
  }
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  
  if (
    pathname.startsWith("/login") ||
    pathname.startsWith("/api/auth/login") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon.ico")
  ) {
    return NextResponse.next();
  }

  const role = decodeRole(req);

  const isProtected =
    pathname.startsWith("/admin") ||
    pathname.startsWith("/teacher") ||
    pathname.startsWith("/student");

  if (isProtected && !role) {
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    url.searchParams.set("next", pathname);
    return NextResponse.redirect(url);
  }

  if (pathname.startsWith("/admin") && role !== "ADMIN")
    return NextResponse.redirect(new URL(ROLE_HOME[role ?? "STUDENT"] ?? "/login", req.url));

  if (pathname.startsWith("/teacher") && role !== "TEACHER")
    return NextResponse.redirect(new URL(ROLE_HOME[role ?? "STUDENT"] ?? "/login", req.url));

  if (pathname.startsWith("/student") && role !== "STUDENT")
    return NextResponse.redirect(new URL(ROLE_HOME[role ?? "STUDENT"] ?? "/login", req.url));

  if (pathname === "/" && role) {
    return NextResponse.redirect(new URL(ROLE_HOME[role] ?? "/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api/health).*)"],
};

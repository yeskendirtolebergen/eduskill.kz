import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const ROLE_HOME: Record<string, string> = {
  ADMIN: "/admin",
  TEACHER: "/teacher",
  STUDENT: "/student",
};

function tokenFromCookie(req: NextRequest) {
  return req.cookies.get("eduskill_token")?.value ?? null;
}

async function roleFromToken(req: NextRequest): Promise<string | null> {
  const token = tokenFromCookie(req);
  if (!token) return null;

  const secret = process.env.AUTH_SECRET;
  if (!secret) return null;

  try {
    const { payload } = await jwtVerify(token, new TextEncoder().encode(secret));
    return (payload as any)?.role ?? null;
  } catch {
    return null;
  }
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Public
  if (
    pathname.startsWith("/login") ||
    pathname.startsWith("/api/auth/login") ||
    pathname.startsWith("/api/auth/logout") ||
    pathname.startsWith("/_next") ||
    pathname === "/favicon.ico"
  ) {
    return NextResponse.next();
  }

  const protectedArea =
    pathname.startsWith("/admin") ||
    pathname.startsWith("/teacher") ||
    pathname.startsWith("/student");

  const role = await roleFromToken(req);

  if (protectedArea && !role) {
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

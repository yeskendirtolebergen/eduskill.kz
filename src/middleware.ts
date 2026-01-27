import { NextResponse, type NextRequest } from "next/server";
import { decrypt } from "./lib/auth";

// Define protected routes and their allowed roles
const protectedRoutes = [
    { path: "/admin", roles: ["ADMIN"] },
    { path: "/teacher", roles: ["ADMIN", "TEACHER"] },
    { path: "/exam", roles: ["STUDENT"] },
];

export async function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;

    // 1. Check if path is protected
    const route = protectedRoutes.find((r) => path.startsWith(r.path));

    if (route) {
        // 2. Get session
        const cookie = request.cookies.get("session")?.value;
        const session = cookie ? await decrypt(cookie) : null;

        // 3. If no session, redirect to login
        if (!session) {
            return NextResponse.redirect(new URL("/login", request.nextUrl));
        }

        // 4. Check role
        // session.role should be stored in JWT
        const userRole = session.role as string;
        if (!route.roles.includes(userRole)) {
            // Unauthorized for this role
            return NextResponse.redirect(new URL("/unauthorized", request.nextUrl));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - login (public)
         */
        '/((?!api|_next/static|_next/image|favicon.ico|login).*)',
    ],
};

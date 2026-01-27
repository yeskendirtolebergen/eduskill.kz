"use server";

import { prisma } from "@/lib/prisma";
import { encrypt } from "@/lib/auth";
import { cookies } from "next/headers";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";

export async function loginAction(prevState: any, formData: FormData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!email || !password) {
        return { error: "Missing email or password" };
    }

    try {
        const user = await prisma.user.findUnique({ where: { email } });

        if (!user) {
            return { error: "Invalid credentials" };
        }

        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
            return { error: "Invalid credentials" };
        }

        // Create session
        const expires = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24h
        const session = await encrypt({
            id: user.id,
            email: user.email,
            role: user.role,
            name: user.name,
            expires
        });

        // Set cookie
        // Note: In Server Actions we can set cookies
        const cookieStore = await cookies();
        cookieStore.set("session", session, {
            expires,
            httpOnly: true,
            secure: process.env.NODE_ENV === "production"
        });

        // Return explicit role for redirection (handled on client or here)
        // We can redirect here
    } catch (err) {
        console.error(err);
        return { error: "Login failed" };
    }

    // If successful, redirect based on role (we need to fetch role again or use var)
    // Let's redirect to /dashboard which checks role? Or specific paths.
    // The User model has role.
    // We can't easily redirect conditionally inside the try block AND set cookies sometimes in older Next versions,
    // but in Next 14 actions it's fine.

    // Re-fetch user (or use local var) to decide redirect
    const user = await prisma.user.findUnique({ where: { email } });
    if (user?.role === "ADMIN") redirect("/admin");
    if (user?.role === "TEACHER") redirect("/teacher");
    if (user?.role === "STUDENT") redirect("/exam");
    redirect("/");
}

export async function logoutAction() {
    const cookieStore = await cookies();
    cookieStore.delete("session");
    redirect("/");
}

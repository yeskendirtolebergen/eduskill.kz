"use server";

import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { revalidatePath } from "next/cache";

export async function getUsers() {
    return await prisma.user.findMany({
        orderBy: { createdAt: "desc" },
        include: { school: true },
    });
}

export async function createUser(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string; // in real app, auto-generate or email invite
    const role = formData.get("role") as string;
    const schoolId = formData.get("schoolId") as string;

    if (!name || !email || !password || !role) {
        return { error: "Missing required fields" };
    }

    // Basic validation for students/schools
    if ((role === "STUDENT" || role === "TEACHER") && !schoolId) {
        return { error: "School is required for Students and Teachers" };
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                role,
                schoolId: schoolId || null,
            },
        });
        revalidatePath("/admin/users");
        return { success: true };
    } catch (e: any) {
        console.error(e);
        if (e.code === 'P2002') return { error: "Email already exists" };
        return { error: "Failed to create user" };
    }
}

export async function deleteUser(id: string) {
    try {
        await prisma.user.delete({ where: { id } });
        revalidatePath("/admin/users");
        return { success: true };
    } catch (e) {
        return { error: "Failed to delete user" };
    }
}

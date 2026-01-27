"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function getSchools() {
    return await prisma.school.findMany({
        orderBy: { createdAt: "desc" },
        include: { _count: { select: { users: true } } },
    });
}

export async function createSchool(formData: FormData) {
    const name = formData.get("name") as string;

    if (!name || name.trim().length === 0) {
        return { error: "School name is required" };
    }

    try {
        await prisma.school.create({
            data: { name },
        });
        revalidatePath("/admin/schools");
        return { success: true };
    } catch (e) {
        console.error(e);
        return { error: "Failed to create school" };
    }
}

export async function deleteSchool(id: string) {
    try {
        await prisma.school.delete({ where: { id } });
        revalidatePath("/admin/schools");
        return { success: true };
    } catch (e) {
        console.error(e);
        return { error: "Failed to delete school" };
    }
}

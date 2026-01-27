"use server";

import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";

export async function getAdminStats() {
    const totalUsers = await prisma.user.count();
    const totalSchools = await prisma.school.count();
    const totalTopics = await prisma.topic.count();
    const totalResults = await prisma.examResult.count();
    const recentResults = await prisma.examResult.findMany({
        take: 5,
        orderBy: { createdAt: "desc" },
        include: { student: true, topic: true }
    });

    return { totalUsers, totalSchools, totalTopics, totalResults, recentResults };
}

export async function getTeacherStats() {
    const session = await getSession();
    if (!session || !session.id) return null;

    // Get current teacher's school
    const teacher = await prisma.user.findUnique({
        where: { id: session.id }
    });

    if (!teacher || !teacher.schoolId) return { error: "No school assigned" };

    const schoolId = teacher.schoolId;

    // Get students of this school
    const students = await prisma.user.findMany({
        where: { schoolId, role: "STUDENT" },
        include: {
            examResults: { include: { topic: true } }
        }
    });

    const passedExams = await prisma.examResult.count({
        where: { student: { schoolId }, status: "PASSED" }
    });

    return { students, passedExams, schoolName: (await prisma.school.findUnique({ where: { id: schoolId } }))?.name };
}

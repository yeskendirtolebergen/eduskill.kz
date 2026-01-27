"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { getSession } from "@/lib/auth";

export async function getTopics() {
    return await prisma.topic.findMany({
        orderBy: { order: "asc" },
        include: { _count: { select: { questions: true } }, author: true },
    });
}

export async function getTopic(id: string) {
    return await prisma.topic.findUnique({
        where: { id },
        include: { questions: true },
    });
}

export async function createTopic(formData: FormData) {
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const passScore = parseInt(formData.get("passScore") as string || "70");

    const session = await getSession();
    if (!session || !session.id) return { error: "Unauthorized" };

    try {
        // Get max order
        const lastTopic = await prisma.topic.findFirst({ orderBy: { order: "desc" } });
        const order = (lastTopic?.order ?? 0) + 1;

        await prisma.topic.create({
            data: {
                title,
                description,
                passScore,
                order,
                authorId: session.id, // Current admin/teacher
            },
        });
        revalidatePath("/admin/topics");
        return { success: true };
    } catch (e) {
        console.error(e);
        return { error: "Failed to create topic" };
    }
}

export async function deleteTopic(id: string) {
    try {
        await prisma.topic.delete({ where: { id } });
        revalidatePath("/admin/topics");
        return { success: true };
    } catch (e) {
        return { error: "Failed to delete topic" };
    }
}

// QUESTIONS

export async function createQuestion(formData: FormData) {
    const topicId = formData.get("topicId") as string;
    const text = formData.get("text") as string;
    const type = formData.get("type") as string; // TEST or MANUAL
    const difficulty = formData.get("difficulty") as string;
    const correctAnswer = formData.get("correctAnswer") as string;

    // For manual questions, options might be empty or null
    // For test questions, we expect JSON or comma separated?
    // Let's assume input text for now to keep it simple or 4 inputs.
    // Simplifying: User enters JSON string manually or we parse 4 fields?
    // Let's parse 4 fields: optionA, optionB, optionC, optionD

    let options = null;
    if (type === "TEST") {
        const optA = formData.get("optionA") as string;
        const optB = formData.get("optionB") as string;
        const optC = formData.get("optionC") as string;
        const optD = formData.get("optionD") as string;
        if (optA && optB && optC && optD) {
            options = JSON.stringify([optA, optB, optC, optD]);
        }
    }

    try {
        await prisma.question.create({
            data: {
                topicId,
                text,
                type,
                difficulty,
                correctAnswer,
                options
            }
        });
        revalidatePath(`/admin/topics/${topicId}`);
        return { success: true };
    } catch (e) {
        console.error(e);
        return { error: "Failed to create question" };
    }
}

export async function deleteQuestion(id: string, topicId: string) {
    try {
        await prisma.question.delete({ where: { id } });
        revalidatePath(`/admin/topics/${topicId}`);
        return { success: true };
    } catch (e) {
        return { error: "Failed to delete question" };
    }
}

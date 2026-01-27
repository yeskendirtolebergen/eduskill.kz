"use server";

import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";
import { getDifficulty, getPoints } from "@/lib/exam-engine";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function startExam(topicId: string) {
    const session = await getSession();
    if (!session || !session.id) return { error: "Unauthorized" };

    // Check if already has active session for this topic?
    const existing = await prisma.examSession.findFirst({
        where: {
            studentId: session.id,
            topicId,
            status: "IN_PROGRESS",
        },
    });

    if (existing) {
        redirect(`/exam/${topicId}`);
    }

    try {
        const exam = await prisma.examSession.create({
            data: {
                studentId: session.id,
                topicId,
                score: 0,
                difficulty: "EASY",
                status: "IN_PROGRESS",
                answeredQuestions: "[]",
            },
        });
        redirect(`/exam/${topicId}`);
    } catch (e) {
        console.error(e);
        return { error: "Failed to start exam" };
    }
}

export async function submitAnswer(sessionId: string, questionId: string, answer: string) {
    try {
        const session = await prisma.examSession.findUnique({
            where: { id: sessionId },
        });

        if (!session || session.status !== "IN_PROGRESS") {
            return { error: "Invalid session" };
        }

        const question = await prisma.question.findUnique({
            where: { id: questionId },
        });

        if (!question) return { error: "Question not found" };

        // Validate Answer
        const isCorrect = answer.trim().toUpperCase() === question.correctAnswer.trim().toUpperCase();

        // Calculate Points
        const diff = session.difficulty as "EASY" | "MEDIUM" | "HARD";
        const pointsChange = getPoints(diff, isCorrect);
        const newScore = Math.max(0, session.score + pointsChange); // Prevent negative score? Logically score can be negative, but spec says "0-40 -> Easy". Let's floor at 0.

        // Update Difficulty
        const newDifficulty = getDifficulty(newScore);

        // Update Session
        const answered = JSON.parse(session.answeredQuestions || "[]");
        answered.push(questionId);

        await prisma.examSession.update({
            where: { id: sessionId },
            data: {
                score: newScore,
                difficulty: newDifficulty,
                answeredQuestions: JSON.stringify(answered),
            },
        });

        return {
            success: true,
            isCorrect,
            pointsChange,
            newScore,
            correctAnswer: question.correctAnswer
        };

    } catch (e) {
        console.error(e);
        return { error: "Failed to submit answer" };
    }
}

export async function getNextQuestion(sessionId: string) {
    const session = await prisma.examSession.findUnique({
        where: { id: sessionId },
    });

    if (!session || session.status !== "IN_PROGRESS") return null;

    const answered = JSON.parse(session.answeredQuestions || "[]");

    // Random selection based on difficulty
    // We could optimize this by fetching IDs only first
    const count = await prisma.question.count({
        where: {
            topicId: session.topicId,
            difficulty: session.difficulty,
            id: { notIn: answered }
        }
    });

    if (count === 0) {
        // No questions left in this difficulty? 
        // Fallback: try any difficulty or just return null (Exam Done?)
        // Spec doesn't clarify what happens if "EASY" runs out but score < 40.
        // Let's look for ANY question not answered.
        const anyCount = await prisma.question.count({
            where: {
                topicId: session.topicId,
                id: { notIn: answered }
            }
        });

        if (anyCount === 0) return null; // Truly no questions left

        // Pick random from any
        const skip = Math.floor(Math.random() * anyCount);
        return await prisma.question.findFirst({
            where: {
                topicId: session.topicId,
                id: { notIn: answered }
            },
            skip
        });
    }

    const skip = Math.floor(Math.random() * count);
    return await prisma.question.findFirst({
        where: {
            topicId: session.topicId,
            difficulty: session.difficulty,
            id: { notIn: answered }
        },
        skip
    });
}

export async function finishExam(sessionId: string) {
    const session = await prisma.examSession.findUnique({
        where: { id: sessionId },
        include: { topic: true }
    });

    if (!session) return { error: "Session not found" };

    // Check if passed
    const passed = session.score >= session.topic.passScore;

    // Create Result
    await prisma.examResult.create({
        data: {
            studentId: session.studentId,
            topicId: session.topicId,
            score: session.score,
            status: passed ? "PASSED" : "FAILED",
        }
    });

    // Update Session to Completed
    await prisma.examSession.update({
        where: { id: sessionId },
        data: { status: "COMPLETED" }
    });

    redirect("/exam");
}

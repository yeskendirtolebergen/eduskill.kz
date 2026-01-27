import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";
import { finishExam, getNextQuestion, submitAnswer } from "@/actions/exam-actions";
import { redirect } from "next/navigation";
import ExamClientInterface from "./exam-client";

export default async function ExamSessionPage({ params }: { params: { topicId: string } }) {
    const { topicId } = await params;
    const session = await getSession();

    // Get active session
    const examSession = await prisma.examSession.findFirst({
        where: {
            studentId: session.id,
            topicId: topicId,
            status: "IN_PROGRESS"
        },
        include: { topic: true }
    });

    if (!examSession) {
        redirect("/exam");
    }

    const question = await getNextQuestion(examSession.id);

    return (
        <ExamClientInterface
            session={examSession}
            question={question}
        />
    );
}

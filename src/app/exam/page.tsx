import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";
import { startExam } from "@/actions/exam-actions";
import { logoutAction } from "@/actions/auth-actions";

async function getStudentTopics(userId: string) {
    const user = await prisma.user.findUnique({
        where: { id: userId },
        include: { school: true }
    });

    if (!user || !user.schoolId) return []; // Should not happen for valid student

    // Get all topics created by admins or any teacher?
    // Spec: "Students see only topics assigned to their school"
    // Wait, topics are created by teachers. Do they belong to schools?
    // Initial spec: "Topics created by Admin or Teacher". "Students see only topics assigned to their school".
    // But Topic model has `authorId`. We need to filter topics where author is in the same school?
    // Or maybe topics are global?
    // Let's assume for MVP: Topics created by Teachers of THAT school, or Admins (global?)
    // Simplified logic: If author is ADMIN -> Global. If author is TEACHER -> Check school.

    // Actually, simplified approach: All topics are visible for now, OR topics authored by users in the same school.
    const schoolId = user.schoolId;

    const topics = await prisma.topic.findMany({
        where: {
            OR: [
                { author: { role: "ADMIN" } },
                { author: { schoolId: schoolId } }
            ]
        },
        orderBy: { order: "asc" },
        include: {
            examResults: {
                where: { studentId: userId, status: "PASSED" }
            }
        }
    });

    return topics;
}

export default async function ExamDashboard() {
    const session = await getSession();
    const topics = await getStudentTopics(session?.id);

    // Calculate unlocked status
    // 1st topic unlocked. Next unlocked if previous passed.
    // We can just iterate.
    let activeFound = false;

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
            <div className="max-w-4xl mx-auto space-y-8">
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">My Exams</h1>
                    <div className="flex items-center gap-4">
                        <span className="text-gray-600 dark:text-gray-300">Welcome, {session?.name}</span>
                        <form action={logoutAction}><button className="text-red-500 hover:text-red-700">Logout</button></form>
                    </div>
                </div>

                <div className="grid gap-6">
                    {topics.map((topic, index) => {
                        const isPassed = topic.examResults.length > 0;
                        // Logic for locked/unlocked
                        // If index == 0, unlocked.
                        // If index > 0, unlocked if topics[index-1] is passed.
                        const isUnlocked = index === 0 || topics[index - 1].examResults.length > 0;

                        return (
                            <div key={topic.id} className={`p-6 rounded-lg border flex justify-between items-center ${isUnlocked ? "bg-white dark:bg-gray-800 shadow-sm border-indigo-100 dark:border-gray-700" : "bg-gray-200 dark:bg-gray-800/50 border-transparent opacity-75 grayscale"
                                }`}>
                                <div>
                                    <h3 className="text-xl font-semibold flex items-center gap-2">
                                        {topic.title}
                                        {isPassed && <span className="text-green-600 text-sm font-bold">✓ PASSED</span>}
                                        {!isUnlocked && <span className="text-gray-500 text-sm">🔒 LOCKED</span>}
                                    </h3>
                                    <p className="text-gray-500 mt-1">{topic.description}</p>
                                    <p className="text-sm text-gray-400 mt-1">Pass Score: {topic.passScore}</p>
                                </div>

                                <div>
                                    {isUnlocked && (
                                        <form action={async () => {
                                            "use server";
                                            await startExam(topic.id);
                                        }}>
                                            <button className={`px-6 py-2 rounded-full font-medium transition-colors ${isPassed
                                                    ? "bg-green-100 text-green-700 hover:bg-green-200"
                                                    : "bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg hover:shadow-xl"
                                                }`}>
                                                {isPassed ? "Retake Exam" : "Start Exam"}
                                            </button>
                                        </form>
                                    )}
                                </div>
                            </div>
                        );
                    })}

                    {topics.length === 0 && (
                        <div className="text-center py-12 text-gray-500">
                            No exams available for your school yet.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

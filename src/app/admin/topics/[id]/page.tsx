import { createQuestion, deleteQuestion, getTopic } from "@/actions/topic-actions";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function TopicDetailPage({ params }: { params: { id: string } }) {
    const { id } = await params;
    const topic = await getTopic(id);

    if (!topic) notFound();

    return (
        <div className="space-y-8">
            <div>
                <Link href="/admin/topics" className="text-sm text-gray-500 hover:underline">← Back to Topics</Link>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-2">{topic.title} - Questions</h2>
                <p className="text-gray-500">{topic.description}</p>
            </div>

            {/* Add Question Form */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border dark:border-gray-700">
                <h3 className="text-lg font-medium mb-4">Add Question</h3>
                <form action={async (formData) => {
                    "use server";
                    await createQuestion(formData);
                }} className="space-y-4">
                    <input type="hidden" name="topicId" value={topic.id} />

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Question Text</label>
                        <textarea name="text" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border dark:bg-gray-700" rows={2} />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Type</label>
                            <select name="type" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border dark:bg-gray-700">
                                <option value="TEST">Multiple Choice (Test)</option>
                                <option value="MANUAL">Manual Answer</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Difficulty</label>
                            <select name="difficulty" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border dark:bg-gray-700">
                                <option value="EASY">Easy</option>
                                <option value="MEDIUM">Medium</option>
                                <option value="HARD">Hard</option>
                            </select>
                        </div>
                    </div>

                    <div className="border-t pt-4 dark:border-gray-700">
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Options (For Multiple Choice)</p>
                        <div className="grid grid-cols-2 gap-2">
                            <input type="text" name="optionA" placeholder="Option A" className="block w-full rounded-md border-gray-300 shadow-sm p-2 border dark:bg-gray-700" />
                            <input type="text" name="optionB" placeholder="Option B" className="block w-full rounded-md border-gray-300 shadow-sm p-2 border dark:bg-gray-700" />
                            <input type="text" name="optionC" placeholder="Option C" className="block w-full rounded-md border-gray-300 shadow-sm p-2 border dark:bg-gray-700" />
                            <input type="text" name="optionD" placeholder="Option D" className="block w-full rounded-md border-gray-300 shadow-sm p-2 border dark:bg-gray-700" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Correct Answer</label>
                        <input type="text" name="correctAnswer" required placeholder="For Test: 'A', 'B' etc. For Manual: The exact number/string." className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border dark:bg-gray-700" />
                    </div>

                    <button type="submit" className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">Add Question</button>
                </form>
            </div>

            {/* Questions List */}
            <div className="space-y-4">
                <h3 className="text-lg font-medium">Existing Questions ({topic.questions.length})</h3>
                {topic.questions.map((q, idx) => (
                    <div key={q.id} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border dark:border-gray-700">
                        <div className="flex justify-between items-start">
                            <div>
                                <div className="flex gap-2 items-center mb-1">
                                    <span className={`px-2 py-0.5 rounded text-xs font-bold ${q.difficulty === 'EASY' ? 'bg-green-100 text-green-800' :
                                        q.difficulty === 'MEDIUM' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                                        }`}>{q.difficulty}</span>
                                    <span className="text-xs text-gray-500 uppercase">{q.type}</span>
                                </div>
                                <p className="font-medium text-gray-900 dark:text-gray-100">{idx + 1}. {q.text}</p>
                                {q.type === 'TEST' && q.options && (
                                    <div className="mt-2 pl-4 text-sm text-gray-600 dark:text-gray-400 grid grid-cols-2 gap-x-4">
                                        {JSON.parse(q.options).map((opt: string, i: number) => (
                                            <div key={i} className={String.fromCharCode(65 + i) === q.correctAnswer ? "font-bold text-green-600" : ""}>
                                                {String.fromCharCode(65 + i)}) {opt}
                                            </div>
                                        ))}
                                    </div>
                                )}
                                <p className="mt-2 text-sm text-green-600 font-semibold">Correct: {q.correctAnswer}</p>
                            </div>
                            <form action={async () => {
                                "use server";
                                await deleteQuestion(q.id, topic.id);
                            }}>
                                <button className="text-red-500 hover:text-red-700 text-sm">Delete</button>
                            </form>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

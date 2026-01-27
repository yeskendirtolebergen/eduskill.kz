import { createTopic, deleteTopic, getTopics } from "@/actions/topic-actions";
import Link from "next/link";

export default async function TopicsPage() {
    const topics = await getTopics();

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Topic Management</h2>

            {/* Create Topic */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border dark:border-gray-700">
                <h3 className="text-lg font-medium mb-4">Create New Topic</h3>
                <form action={async (formData) => {
                    "use server";
                    await createTopic(formData);
                }} className="flex gap-4 items-end flex-wrap">
                    <div className="flex-1 min-w-[200px]">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Topic Title</label>
                        <input type="text" name="title" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border dark:bg-gray-700" placeholder="Algebra Basics" />
                    </div>
                    <div className="flex-1 min-w-[200px]">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Description</label>
                        <input type="text" name="description" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border dark:bg-gray-700" placeholder="Introduction to..." />
                    </div>
                    <div className="w-32">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Pass Score</label>
                        <input type="number" name="passScore" defaultValue={70} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border dark:bg-gray-700" />
                    </div>
                    <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">Create</button>
                </form>
            </div>

            {/* Topics List */}
            <div className="grid gap-4">
                {topics.map((topic) => (
                    <div key={topic.id} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border dark:border-gray-700 flex justify-between items-center">
                        <div>
                            <h4 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">
                                <Link href={`/admin/topics/${topic.id}`}>{topic.title}</Link>
                            </h4>
                            <p className="text-sm text-gray-500">{topic.description}</p>
                            <div className="text-xs text-gray-400 mt-1">
                                Questions: {topic._count.questions} | Pass Score: {topic.passScore} | Order: {topic.order}
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <Link href={`/admin/topics/${topic.id}`} className="text-indigo-600 hover:underline text-sm">Manage Questions</Link>
                            <form action={async () => {
                                "use server";
                                await deleteTopic(topic.id);
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

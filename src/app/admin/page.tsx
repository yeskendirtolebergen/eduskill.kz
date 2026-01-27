import { getAdminStats } from "@/actions/stats-actions";
import Link from "next/link";

export default async function AdminPage() {
    const stats = await getAdminStats();

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Admin Overview</h2>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-indigo-100 dark:border-gray-700">
                    <h3 className="text-gray-500 text-sm font-medium">Total Users</h3>
                    <p className="text-3xl font-bold text-indigo-600 mt-2">{stats.totalUsers}</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-indigo-100 dark:border-gray-700">
                    <h3 className="text-gray-500 text-sm font-medium">Schools</h3>
                    <p className="text-3xl font-bold text-indigo-600 mt-2">{stats.totalSchools}</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-indigo-100 dark:border-gray-700">
                    <h3 className="text-gray-500 text-sm font-medium">Topics</h3>
                    <p className="text-3xl font-bold text-indigo-600 mt-2">{stats.totalTopics}</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-indigo-100 dark:border-gray-700">
                    <h3 className="text-gray-500 text-sm font-medium">Exams Taken</h3>
                    <p className="text-3xl font-bold text-indigo-600 mt-2">{stats.totalResults}</p>
                </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
                <h3 className="text-lg font-bold mb-4">Recent Exam Results</h3>
                <table className="min-w-full">
                    <thead>
                        <tr className="text-left text-xs text-gray-500 uppercase border-b">
                            <th className="pb-2">Student</th>
                            <th className="pb-2">Topic</th>
                            <th className="pb-2">Score</th>
                            <th className="pb-2">Status</th>
                            <th className="pb-2">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {stats.recentResults.map(r => (
                            <tr key={r.id} className="border-b last:border-0 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                                <td className="py-3">{r.student.name}</td>
                                <td className="py-3">{r.topic.title}</td>
                                <td className="py-3">{r.score}</td>
                                <td className="py-3">
                                    <span className={`px-2 py-1 rounded text-xs font-bold ${r.status === "PASSED" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                                        {r.status}
                                    </span>
                                </td>
                                <td className="py-3 text-sm text-gray-500">{new Date(r.createdAt).toLocaleDateString()}</td>
                            </tr>
                        ))}
                        {stats.recentResults.length === 0 && (
                            <tr><td colSpan={5} className="py-4 text-center text-gray-500">No exams taken yet.</td></tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

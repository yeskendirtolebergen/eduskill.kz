import { getTeacherStats } from "@/actions/stats-actions";
import Link from "next/link";
import { logoutAction } from "@/actions/auth-actions";

export default async function TeacherPage() {
    const stats = await getTeacherStats();

    if (!stats || 'error' in stats) {
        return (
            <div className="p-8">
                <div className="bg-yellow-50 text-yellow-800 p-4 rounded">
                    Warning: You are not assigned to any school. Please contact Administrator.
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <nav className="bg-white dark:bg-gray-800 shadow-sm border-b dark:border-gray-700 px-8 py-4 flex justify-between items-center">
                <h1 className="text-xl font-bold text-indigo-600 dark:text-indigo-400">Teacher Dashboard - {stats.schoolName}</h1>
                <div className="flex gap-4 items-center">
                    <Link href="/teacher/create-topic" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 text-sm font-medium">
                        + Create Topic
                    </Link>
                    <form action={logoutAction}><button className="text-red-500 hover:text-red-700">Logout</button></form>
                </div>
            </nav>

            <div className="p-8 max-w-7xl mx-auto space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                        <h3 className="text-gray-500 text-sm font-medium">My Students</h3>
                        <p className="text-3xl font-bold text-indigo-600 mt-2">{stats.students.length}</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                        <h3 className="text-gray-500 text-sm font-medium">Total Passed Exams</h3>
                        <p className="text-3xl font-bold text-green-600 mt-2">{stats.passedExams}</p>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
                    <h3 className="text-lg font-bold mb-4">Student Progress</h3>
                    <div className="overflow-x-auto">
                        <table className="min-w-full">
                            <thead className="bg-gray-50 dark:bg-gray-700">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Student Name</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Completed Exams</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Recent Performance</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                {stats.students.map(student => (
                                    <tr key={student.id}>
                                        <td className="px-6 py-4 font-medium">{student.name}</td>
                                        <td className="px-6 py-4 text-gray-500">{student.email}</td>
                                        <td className="px-6 py-4">
                                            {student.examResults.filter(r => r.status === "PASSED").length} Passed
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex gap-2">
                                                {student.examResults.slice(0, 3).map(r => (
                                                    <span key={r.id} className={`px-2 py-0.5 text-xs rounded ${r.status === "PASSED" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`} title={`${r.topic.title}: ${r.score}pts`}>
                                                        {r.topic.title.substring(0, 10)}..
                                                    </span>
                                                ))}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                {stats.students.length === 0 && (
                                    <tr><td colSpan={4} className="px-6 py-8 text-center text-gray-500">No students found in your school.</td></tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

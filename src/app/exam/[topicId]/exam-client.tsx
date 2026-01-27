"use client";

import { finishExam, submitAnswer } from "@/actions/exam-actions";
import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

export default function ExamClientInterface({ session, question }: { session: any, question: any }) {
    const [selectedOption, setSelectedOption] = useState("");
    const [feedback, setFeedback] = useState<{ correct: boolean, change: number, correctAns: string } | null>(null);
    const [isPending, startTransition] = useTransition();
    const router = useRouter();

    const handleSubmit = async () => {
        if (!selectedOption) return;

        startTransition(async () => {
            const res = await submitAnswer(session.id, question.id, selectedOption);
            if (res.success) {
                setFeedback({
                    correct: res.isCorrect,
                    change: res.pointsChange,
                    correctAns: res.correctAnswer
                });
            }
        });
    };

    const handleNext = () => {
        setFeedback(null);
        setSelectedOption("");
        router.refresh();
    };

    const handleFinish = async () => {
        await finishExam(session.id);
    };

    if (!question) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl text-center max-w-md w-full">
                    <h2 className="text-2xl font-bold mb-4">Exam Finished!</h2>
                    <p className="mb-6">You have completed all available questions.</p>
                    <p className="text-xl font-bold mb-6">Final Score: {session.score}</p>
                    <button onClick={handleFinish} className="bg-indigo-600 text-white px-6 py-2 rounded-full w-full">
                        View Results
                    </button>
                </div>
            </div>
        );
    }

    const options = question.type === "TEST" ? JSON.parse(question.options || "[]") : null;

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
            {/* Header */}
            <div className="bg-white dark:bg-gray-800 shadow-sm p-4 flex justify-between items-center sticky top-0 z-10">
                <div>
                    <h2 className="font-bold text-gray-700 dark:text-gray-200">{session.topic.title}</h2>
                    <div className="text-xs text-gray-500">Question Difficulty: {question.difficulty}</div>
                </div>
                <div className="text-right">
                    <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{session.score} pts</div>
                    <div className="text-xs text-gray-500">Goal: {session.topic.passScore} pts</div>
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 p-4 sm:p-8 max-w-3xl mx-auto w-full">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sm:p-10 mb-6">
                    <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-gray-100 mb-8 leading-relaxed">
                        {question.text}
                    </h3>

                    {/* Options or Input */}
                    <div className="space-y-4">
                        {question.type === "TEST" ? (
                            <div className="grid grid-cols-1 gap-3">
                                {options.map((opt: string, i: number) => {
                                    const letter = String.fromCharCode(65 + i);
                                    return (
                                        <button
                                            key={i}
                                            onClick={() => !feedback && setSelectedOption(opt)}
                                            disabled={!!feedback}
                                            className={`p-4 rounded-lg border-2 text-left transition-all flex items-center gap-4 ${selectedOption === opt
                                                ? "border-indigo-600 bg-indigo-50 dark:bg-indigo-900/20"
                                                : "border-gray-200 dark:border-gray-700 hover:border-indigo-300"
                                                } ${feedback ? "opacity-75 cursor-not-allowed" : ""}`}
                                        >
                                            <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${selectedOption === opt ? "bg-indigo-600 text-white" : "bg-gray-100 dark:bg-gray-700 text-gray-500"
                                                }`}>
                                                {letter}
                                            </span>
                                            <span className="text-lg">{opt}</span>
                                        </button>
                                    )
                                })}
                            </div>
                        ) : (
                            <input
                                type="text"
                                value={selectedOption}
                                onChange={(e) => setSelectedOption(e.target.value)}
                                disabled={!!feedback}
                                placeholder="Enter your answer..."
                                className="w-full text-lg p-4 rounded-lg border-2 border-gray-300 focus:border-indigo-500 outline-none dark:bg-gray-700 dark:border-gray-600"
                            />
                        )}
                    </div>
                </div>

                {/* Feedback & Controls */}
                <div className="fixed bottom-0 left-0 right-0 p-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 sm:relative sm:bg-transparent sm:border-0 sm:p-0">
                    <div className="max-w-3xl mx-auto flex items-center justify-between gap-4">
                        {feedback ? (
                            <div className={`flex-1 p-4 rounded-lg flex items-center justify-between ${feedback.correct ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300" : "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300"
                                }`}>
                                <div>
                                    <div className="font-bold text-lg">{feedback.correct ? "Correct!" : "Incorrect"}</div>
                                    <div className="text-sm">
                                        {feedback.correct ? `+${feedback.change} Points` : `${feedback.change} Points`}
                                        {!feedback.correct && <span className="ml-2">Correct Answer: <b>{feedback.correctAns}</b></span>}
                                    </div>
                                </div>
                                <button onClick={handleNext} className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-6 py-2 rounded-full font-bold shadow-sm hover:shadow-md">
                                    Next Question →
                                </button>
                            </div>
                        ) : (
                            <div className="ml-auto flex gap-4 w-full sm:w-auto">
                                <button onClick={handleFinish} className="flex-1 sm:flex-none text-gray-500 hover:text-red-500 px-4 py-2">
                                    Quit Exam
                                </button>
                                <button
                                    onClick={handleSubmit}
                                    disabled={!selectedOption || isPending}
                                    className="flex-1 sm:flex-none bg-indigo-600 text-white px-8 py-3 rounded-full font-bold hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-indigo-500/30 transition-all"
                                >
                                    {isPending ? "Checking..." : "Submit Answer"}
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

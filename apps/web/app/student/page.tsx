"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

type MeResponse = {
  user: null | {
    id: string;
    email: string;
    role: "STUDENT" | "TEACHER" | "ADMIN";
    studentProfile: null | {
      firstName: string | null;
      lastName: string | null;
      grade: number | null;
      city: string | null;
      school: { id: string; name: string };
    };
  };
};

type TopicItem = {
  id: string;
  title: string;
  orderIndex: number;
  bestScore: number;
  passed: boolean;
  unlocked: boolean;
};

export default function StudentPage() {
  const router = useRouter();
  const [me, setMe] = useState<MeResponse["user"]>(null);
  const [topics, setTopics] = useState<TopicItem[]>([]);
  const [loading, setLoading] = useState(true);

  const gradeLabel = useMemo(() => {
    const g = me?.studentProfile?.grade;
    return g ? `${g} класс` : "Класс не указан";
  }, [me]);

  async function logout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
  }

  useEffect(() => {
    (async () => {
      setLoading(true);
      const meRes = await fetch("/api/auth/me");
      const meJson: MeResponse = await meRes.json();
      setMe(meJson.user);

      const tRes = await fetch("/api/student/topics");
      const tJson = await tRes.json();
      setTopics(tJson.topics || []);

      setLoading(false);
    })();
  }, []);

  if (loading) return <div className="p-6">Loading...</div>;

  const profile = me?.studentProfile;

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-5xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow p-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gray-200" />
            <div>
              <div className="text-xl font-semibold">
                {(profile?.firstName ?? "Student") + " " + (profile?.lastName ?? "")}
              </div>
              <div className="text-sm text-gray-600">
                {gradeLabel} • {profile?.city ?? "Город не указан"} • {profile?.school?.name ?? "Школа не указана"}
              </div>
            </div>
          </div>

          <button onClick={logout} className="px-4 py-2 rounded bg-black text-white hover:bg-gray-800">
            Logout
          </button>
        </div>

        <div className="mt-6 bg-white rounded-lg shadow">
          <div className="p-4 border-b font-semibold">Темы</div>

          <div className="divide-y">
            {topics.map((t) => (
              <div key={t.id} className="p-4 flex items-center justify-between">
                <div>
                  <div className="font-medium">
                    {t.orderIndex}. {t.title}
                  </div>
                  <div className="text-sm text-gray-600">
                    Баллы: <span className="font-semibold">{t.bestScore}</span> / 100
                    {t.passed ? <span className="ml-2 text-green-600">Passed</span> : null}
                    {!t.unlocked ? <span className="ml-2 text-gray-400">Locked</span> : null}
                  </div>
                </div>

                <button
                  disabled={!t.unlocked}
                  className="px-4 py-2 rounded bg-black text-white hover:bg-gray-800 disabled:opacity-40"
                  onClick={() => router.push(`/student/topic/${t.id}`)}
                >
                  Начать тренировку
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

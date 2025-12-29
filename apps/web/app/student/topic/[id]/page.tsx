"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function TopicExamPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  const [score, setScore] = useState(0);
  const [q, setQ] = useState<any>(null);
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(true);

  async function loadNext() {
    setLoading(true);
    const res = await fetch("/api/student/exam/next", {
      method: "POST",
      body: JSON.stringify({ topicId: id, score }),
    });
    const data = await res.json();
    setQ(data);
    setAnswer("");
    setLoading(false);
  }

  async function submit() {
    const res = await fetch("/api/student/exam/answer", {
      method: "POST",
      body: JSON.stringify({
        questionId: q.id,
        topicId: id,
        answer,
        currentScore: score,
      }),
    });
    const data = await res.json();
    setScore(data.newScore);

    if (data.passed) {
      alert("🎉 Тема пройдена!");
      router.push("/student");
    } else {
      loadNext();
    }
  }

  useEffect(() => {
    loadNext();
  }, []);

  if (loading) return <div className="p-6">Загрузка…</div>;
  if (!q) return <div className="p-6">Нет вопросов</div>;

  return (
    <div className="max-w-xl mx-auto p-6">
      <div className="mb-4 font-semibold">Баллы: {score}</div>

      <div className="mb-4 text-lg">{q.text}</div>

      {q.type === "TEST" ? (
        <div className="space-y-2">
          {q.options.map((o: string) => (
            <label key={o} className="block">
              <input
                type="radio"
                name="opt"
                value={o}
                checked={answer === o}
                onChange={() => setAnswer(o)}
              />{" "}
              {o}
            </label>
          ))}
        </div>
      ) : (
        <input
          className="border p-2 w-full"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
      )}

      <button
        onClick={submit}
        className="mt-4 px-4 py-2 bg-black text-white rounded"
        disabled={!answer}
      >
        Ответить
      </button>
    </div>
  );
}

import bcrypt from "bcryptjs";
import { PrismaClient, Role, Difficulty, QuestionType } from "../generated/prisma";

const prisma = new PrismaClient();

async function main() {
  // Clean (MVP - удобно для разработки)
  await prisma.question.deleteMany();
  await prisma.schoolTopic.deleteMany();
  await prisma.topic.deleteMany();
  await prisma.studentProfile.deleteMany();
  await prisma.teacherSchool.deleteMany();
  await prisma.school.deleteMany();
  await prisma.user.deleteMany();

  const passwordHash = await bcrypt.hash("admin123", 10);
  const teacherHash = await bcrypt.hash("teacher123", 10);
  const studentHash = await bcrypt.hash("student123", 10);

  // School
  const school = await prisma.school.create({
    data: { name: "Pilot School #1" },
  });

  // Users
  const admin = await prisma.user.create({
    data: { email: "admin@eduskill.kz", password: passwordHash, role: Role.ADMIN },
  });

  const teacher = await prisma.user.create({
    data: { email: "teacher@eduskill.kz", password: teacherHash, role: Role.TEACHER },
  });

  const student = await prisma.user.create({
    data: { email: "student@eduskill.kz", password: studentHash, role: Role.STUDENT },
  });

  // Relations
  await prisma.teacherSchool.create({
    data: { teacherId: teacher.id, schoolId: school.id },
  });

  await prisma.studentProfile.create({
    data: {
      studentId: student.id,
      schoolId: school.id,
      firstName: "Student",
      lastName: "One",
      grade: 7,
      city: "Almaty",
    },
  });

  // Topics (sequential)
  const topics = await prisma.topic.createMany({
    data: [
      { title: "Exponents: basics", orderIndex: 1, createdById: admin.id },
      { title: "Linear function", orderIndex: 2, createdById: admin.id },
      { title: "Polynomials", orderIndex: 3, createdById: admin.id },
    ],
  });

  // Attach topics to school
  const allTopics = await prisma.topic.findMany({ orderBy: { orderIndex: "asc" } });
  await prisma.schoolTopic.createMany({
    data: allTopics.map((t) => ({ schoolId: school.id, topicId: t.id })),
  });

  // Minimal questions (для демонстрации)
  const topic1 = allTopics[0];
  await prisma.question.createMany({
    data: [
      {
        topicId: topic1.id,
        type: QuestionType.MULTIPLE_CHOICE,
        difficulty: Difficulty.EASY,
        prompt: "2^3 equals?",
        options: ["6", "8", "9", "12"],
        correctKey: "B",
      },
      {
        topicId: topic1.id,
        type: QuestionType.NUMERIC,
        difficulty: Difficulty.MEDIUM,
        prompt: "Compute: 5^2",
        correctNum: "25",
      },
      {
        topicId: topic1.id,
        type: QuestionType.MULTIPLE_CHOICE,
        difficulty: Difficulty.HARD,
        prompt: "Which is correct: a^m * a^n = ?",
        options: ["a^(m-n)", "a^(m+n)", "a^(mn)", "a^(m/n)"],
        correctKey: "B",
      },
    ],
  });

  console.log("Seed complete:");
  console.log(" admin:", admin.email, " / admin123");
  console.log(" teacher:", teacher.email, " / teacher123");
  console.log(" student:", student.email, " / student123");
  console.log(" school:", school.name);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

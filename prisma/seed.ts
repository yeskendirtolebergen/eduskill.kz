
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
    console.log('🌱 Starting seed...');

    // 1. Create Data
    // Password for all users: "password123"
    const password = await bcrypt.hash('password123', 10);

    // --- Create Schools ---
    const schoolA = await prisma.school.create({
        data: { name: 'Almaty School #1' }
    });
    const schoolB = await prisma.school.create({
        data: { name: 'Astana School #5' }
    });
    console.log('✅ Schools created');

    // --- Create Users ---
    // Admin
    await prisma.user.upsert({
        where: { email: 'admin@eduskill.kz' },
        update: {},
        create: {
            name: 'Super Admin',
            email: 'admin@eduskill.kz',
            password,
            role: 'ADMIN',
        }
    });

    // Teachers
    const teacherA = await prisma.user.create({
        data: {
            name: 'Teacher Almaty',
            email: 'teacher.a@school.kz',
            password,
            role: 'TEACHER',
            schoolId: schoolA.id
        }
    });

    const teacherB = await prisma.user.create({
        data: {
            name: 'Teacher Astana',
            email: 'teacher.b@school.kz',
            password,
            role: 'TEACHER',
            schoolId: schoolB.id
        }
    });

    // Students
    await prisma.user.create({
        data: {
            name: 'Student Almaty',
            email: 'student.a@school.kz',
            password,
            role: 'STUDENT',
            schoolId: schoolA.id
        }
    });

    await prisma.user.create({
        data: {
            name: 'Student Astana',
            email: 'student.b@school.kz',
            password,
            role: 'STUDENT',
            schoolId: schoolB.id
        }
    });
    console.log('✅ Users created');

    // --- Create Topics & Questions ---
    
    // Topic 1 (Created by Teacher A)
    const topic1 = await prisma.topic.create({
        data: {
            title: 'Algebra Basics',
            description: 'Introduction to variables and equations',
            passScore: 70,
            order: 1,
            authorId: teacherA.id
        }
    });

    // Questions for Topic 1
    // Easy
    await prisma.question.create({
        data: {
            text: 'Solve for x: 2x = 10',
            type: 'TEST',
            difficulty: 'EASY',
            options: JSON.stringify(['2', '5', '8', '10']),
            correctAnswer: '5',
            topicId: topic1.id
        }
    });
    await prisma.question.create({
        data: {
            text: 'What is 5 + 7?',
            type: 'TEST',
            difficulty: 'EASY',
            options: JSON.stringify(['10', '11', '12', '13']),
            correctAnswer: '12',
            topicId: topic1.id
        }
    });

    // Medium
    await prisma.question.create({
        data: {
            text: 'Solve for x: 3x + 5 = 20',
            type: 'TEST',
            difficulty: 'MEDIUM',
            options: JSON.stringify(['3', '5', '7', '8']),
            correctAnswer: '5',
            topicId: topic1.id
        }
    });
    await prisma.question.create({
        data: {
            text: 'Simplify: 2(x + 3) - 4',
            type: 'TEST',
            difficulty: 'MEDIUM',
            options: JSON.stringify(['2x + 2', '2x + 6', '2x - 1', '2x']),
            correctAnswer: '2x + 2',
            topicId: topic1.id
        }
    });

    // Hard
    await prisma.question.create({
        data: {
            text: 'Solve system: x + y = 10, x - y = 4',
            type: 'TEST',
            difficulty: 'HARD',
            options: JSON.stringify(['x=6, y=4', 'x=7, y=3', 'x=8, y=2', 'x=5, y=5']),
            correctAnswer: 'x=7, y=3',
            topicId: topic1.id
        }
    });
    console.log('✅ Topic 1 created with questions');

    // Topic 2 (Created by Teacher B)
    const topic2 = await prisma.topic.create({
        data: {
            title: 'Geometry 101',
            description: 'Shapes and Angles',
            passScore: 70,
            order: 2,
            authorId: teacherB.id
        }
    });
    
    // Simple question for Topic 2
    await prisma.question.create({
        data: {
            text: 'Sum of angles in a triangle?',
            type: 'TEST',
            difficulty: 'EASY',
            options: JSON.stringify(['90', '180', '360', '100']),
            correctAnswer: '180',
            topicId: topic2.id
        }
    });

    console.log('✅ Seed completed!');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

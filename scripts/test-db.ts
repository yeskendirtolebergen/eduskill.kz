import "dotenv/config";
import { prisma } from "../src/lib/prisma";
import bcrypt from "bcryptjs";

async function main() {
    console.log("Connecting to DB...");
    try {
        const email = "admin@test.com";
        const password = "password123";
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.upsert({
            where: { email },
            update: { password: hashedPassword },
            create: {
                name: "Test Admin",
                email,
                password: hashedPassword,
                role: "ADMIN",
            },
        });
        console.log("Upserted user:", user);

        // Create a student too
        const studentEmail = "student@test.com";
        const studentUser = await prisma.user.upsert({
            where: { email: studentEmail },
            update: { password: hashedPassword },
            create: {
                name: "Test Student",
                email: studentEmail,
                password: hashedPassword,
                role: "STUDENT",
            },
        });
        console.log("Upserted student:", studentUser);

        const count = await prisma.user.count();
        console.log("Total users:", count);
    } catch (e) {
        console.error("Error connecting to DB:", e);
    } finally {
        await prisma.$disconnect();
    }
}

main();

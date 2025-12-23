# eduskill.kz — MVP Online Math Exam Platform

Minimal functional version of an online math-exam platform for schools. The MVP is designed for rapid pilot launches in real schools, feedback collection, and fast iteration.

## Goals (MVP)
- Run topic-based math exams for students inside a school context
- Enforce sequential topic unlocking (pass threshold: 70 points)
- Provide monitoring dashboards for Admin and Teachers
- Keep the stack simple to deploy and iterate quickly

---

## User Roles

### Admin
- Creates and manages all users (admins, teachers, students)
- Creates and manages schools
- Assigns users to schools
- Manages topics & questions
- Views full monitoring dashboards (all schools)

### Teacher
- Belongs to one or several schools
- Creates topics and questions (scoped by permissions)
- Monitors student progress and exam results for assigned schools

### Student
- Belongs to exactly one school
- Takes topic-based exams
- Can access only unlocked topics
- Must score **70+ points** to pass a topic
- After passing → next topic unlocks

---

## Schools
- Every teacher & student must be linked to at least one school
- Students → exactly one school
- Teachers → one or more schools
- Post-MVP: student transfer between schools

---

## Content Model

### Topics
- Created by Admin or Teacher
- Assigned to schools
- Topics are sequential: students unlock one-by-one
- Only one topic is “open” at a time for the student (current unlocked topic)

### Questions
Types:
1) **Test** (multiple choice)
2) **Manual numeric answer**

Difficulty:
- Easy
- Medium
- Hard

---

## Exam Logic (MVP)

### Scoring System
| Difficulty | Correct | Mistake |
|----------:|--------:|--------:|
| Easy      | +5      | -3      |
| Medium    | +7      | -5      |
| Hard      | +10     | -7      |

### Difficulty Progression
- `0–40` points → Easy  
- `41–70` points → Medium  
- `71+` points → Hard  

### Passing & Completion
- Topic is **passed** at **70+ points**
- Student may continue up to **100** for a better score
- After passing → next topic unlocks

### Question Selection
- Questions are selected **randomly** per attempt
- Selection is filtered by current topic + difficulty

---

## Monitoring Dashboards (MVP)

### Admin Dashboard
- Filter by school
- Student progress overview
- Topic pass statistics
- Teacher activity monitoring

### Teacher Dashboard
- Filter by assigned schools
- Topic-level performance
- Student-level statistics (average score, pass/fail rates)

---

## MVP Release Scope

### Included
- Role system (Admin/Teacher/Student)
- School structure
- Topic & question creation
- Exam engine (scoring, difficulty switching, unlocking)
- Student exam UI
- Monitoring dashboards
- Simple authentication
- Admin panel basics

### Not Included (Post-MVP)
- Student transfer
- Multiple subjects
- Advanced analytics
- Mobile app
- Bulk import/export

---

## Tech Stack (Planned)
This repository is intended to run as a modern web application.

Recommended:
- Frontend: Next.js + React
- Backend: Next.js API routes (or separate service later)
- Database: PostgreSQL
- ORM: Prisma
- Auth: Credentials/JWT (MVP)

> If the current repository differs from this stack, update this section to match the implementation.

---

## Repository Structure (suggested)


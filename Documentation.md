# **Esepter.kz — MVP Documentation**

## **1. Overview**
Esepter.kz is an online math examination platform for schools. The MVP focuses on topic-based tests, scoring logic, user roles, and school-based distribution.

---

## **2. Architecture Overview (Next.js Fullstack)**

### Core entities:
* User (Admin, Teacher, Student)
* School
* Topic
* Question
* ExamAttempt
* ExamResult

**Tech Stack**:
*   **Framework**: Next.js 14+ (App Router)
*   **Language**: TypeScript
*   **Backend**: Next.js API Routes (Serverless functions)
*   **DB**: PostgreSQL (via Prisma/Drizzle)

---

## **3. User Roles & Permissions**

### Admin:
* Manage schools
* Create users
* Assign roles
* Manage topics/questions
* View full monitoring

### Teacher:
* Manage topics/questions
* View analytics for their schools

### Student:
* Take exams
* View progress
* Unlock topics

---

## **4. Topic & Question System**

### Topic:
* Contains questions
* Has pass condition: 70 points
* Is sequential (unlock by passing previous)

### Question:
* Type: test/manual
* Difficulty: easy/medium/hard
* Scoring dynamic based on difficulty

---

## **5. Exam Flow**
1. Student selects available topic
2. Exam starts at *easy* level
3. Scoring & progression auto-adjust difficulty
4. At 70 points → topic passed
5. Results stored → next topic unlocked

---

## **6. Scoring Formula**

**Balanced Model:**
```
Easy:   +5 / -3
Medium: +7 / -5
Hard:   +10 / -7
```

**Difficulty Selection Logic:**
```
Score ≤ 40 → Easy
Score ≤ 70 → Medium
Score > 70 → Hard
```

---

## **7. Dashboards**

### Admin dashboard:
* School filter
* Student progress summary
* Topic pass rate

### Teacher dashboard:
* Filter by assigned schools
* Topic-level analytics
* Student-level progress

---

## **8. Security**
* Authentication (NextAuth or JWT)
* Password hashing (bcrypt)
* Role-based access control (RBAC) middleware

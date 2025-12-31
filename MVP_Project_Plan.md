# ✅ Crystal Clear MVP Project Plan

### **Project Name:** *EDUSKILL.KZ — Math Examination Platform*

---

## **🎯 MVP Goal**
Launch a minimal functional version of an online math-exam platform for schools. The goal is to test the product in real schools, collect feedback, and improve.

---

## **👥 User Roles**

### **1. Admin**
* Creates & manages all users (admins, teachers, students)
* Assigns each user to a school
* Generates login credentials
* Manages topics & questions
* Can view full monitoring dashboards

### **2. Teacher**
* Belongs to one or several schools
* Creates topics and questions
* Monitors student progress and exam results
* Dashboard filtered by assigned schools

### **3. Student**
* Belongs to **one and only one school**
* Takes topic-based exams
* Can access only unlocked topics
* Each topic requires **70 points** to pass
* Once passed, next topic unlocks

---

## **🏫 Schools**
* Every teacher & student must be linked to at least one school
* Students → exactly one school
* Future features: student transfer between schools, teachers connected to multiple schools

---

## **📚 Content Structure**

### **Topics**
* Created by Admin or Teacher
* Students see only topics assigned to their school
* One topic open at a time

### **Questions**
* Modes:
    1. **Test** (multiple-choice)
    2. **Manual numeric answer**
* **Difficulty**: Easy, Medium, Hard

---

## **🧮 Exam Logic**

### **Scoring System (Balanced)**

| Difficulty | Correct | Mistake | Rationale |
| ---------- | ------- | ------- | --------- |
| Easy       | +5      | -3      | Less point inflation for easy questions |
| Medium     | +7      | -5      | Medium becomes most valuable |
| Hard       | +10     | -7      | Encourages reaching harder level |

### **Test Flow**
1. Test starts with **easy** difficulty.
2. System selects questions **randomly**.
3. Difficulty upgrades automatically:
    *   0–40 points → Easy
    *   41–70 points → Medium
    *   71+ points → Hard
4. Topic passed at **70 points**.
5. After passing → next topic unlocks.

---

## **📊 Dashboards (Monitoring)**

### **Admin Dashboard**
* School filter
* Student progress
* Topic passing statistics
* Teacher activity

### **Teacher Dashboard**
* Filter by schools they belong to
* Topic-level analysis
* Student-level statistics
* Average points, fail/pass rates

---

## **🚀 MVP Release Scope**

### Included:
* Role system & School structure
* Topic & question creation
* Exam engine (scoring, progression, difficulty logic)
* Student exam UI
* Monitoring dashboards
* Simple authentication

### Not included (Post-MVP):
* Student transfer
* Multiple subject support
* Advanced analytics
* Mobile app
* Bulk import/export

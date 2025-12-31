
import csv

tasks = [
    # EPIC 1: User & Role Management
    ["UR-1", "Create user model", "Implement Admin, Teacher, Student models", "Backend", "High"],
    ["UR-2", "Authentication & login", "Implement simple username/password login", "Backend/Frontend", "High"],
    ["UR-3", "Role-based access", "Permissions system for 3 roles", "Backend", "High"],
    ["UR-4", "Admin user creation UI", "Screen to create users + assign school", "Frontend", "Medium"],
    ["UR-5", "Password auto-generation", "Generate login password for users", "Backend", "Medium"],
    
    # EPIC 2: School Management
    ["SC-1", "School model", "CRUD for schools", "Backend", "High"],
    ["SC-2", "Assign teacher to school", "Support multiple schools", "Backend", "High"],
    ["SC-3", "Assign student to school", "Must be exactly one school", "Backend", "High"],
    ["SC-4", "School filter in dashboards", "For Admin & Teachers", "Frontend", "Medium"],

    # EPIC 3: Topics & Questions
    ["TQ-1", "Topic model", "CRUD for topics", "Backend", "High"],
    ["TQ-2", "Question model", "Modes: test/manual", "Backend", "High"],
    ["TQ-3", "Difficulty levels", "easy/medium/hard", "Backend", "High"],
    ["TQ-4", "Topic creation UI", "For Admin/Teacher", "Frontend", "Medium"],
    ["TQ-5", "Question creation UI", "For Admin/Teacher", "Frontend", "Medium"],

    # EPIC 4: Exam Engine
    ["EE-1", "Exam start logic", "Load topic -> start exam", "Backend", "High"],
    ["EE-2", "Random question selection", "Based on difficulty", "Backend", "High"],
    ["EE-3", "Automatic difficulty switch", "easy -> medium -> hard", "Backend", "High"],
    ["EE-4", "Scoring system", "Balanced scoring (+5/-3; +7/-5; +10/-7)", "Backend", "High"],
    ["EE-5", "Topic pass logic", "Unlock next topic at 70 points", "Backend", "High"],
    ["EE-6", "Exam UI", "Student answering UI", "Frontend", "High"],

    # EPIC 5: Progress & Monitoring
    ["PM-1", "Save exam results", "Store answers & points", "Backend", "High"],
    ["PM-2", "Admin dashboard", "School filter + analytics", "Frontend", "Medium"],
    ["PM-3", "Teacher dashboard", "Stats for assigned schools", "Frontend", "Medium"],
    ["PM-4", "Student progress page", "Passed topics, points", "Frontend", "Medium"],

    # EPIC 6: Infrastructure
    ["INF-1", "DB schema", "ERD for MVP", "Architecture", "High"],
    ["INF-2", "API design", "REST design", "Architecture", "High"],
    ["INF-3", "Deployment", "Staging & Prod", "DevOps", "High"],
]

header = ["Key", "Title", "Description", "Type", "Priority"]

with open('/Users/admin/.gemini/antigravity/scratch/eduskill-kz/jira_tasks.csv', 'w', newline='') as f:
    writer = csv.writer(f)
    writer.writerow(header)
    writer.writerows(tasks)

print("Jira tasks CSV generated.")

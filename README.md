# 📊 FinPilot

**AI-Powered Finance Management Platform**  
Built with Next.js, Supabase, Gemini AI, Clerk, and Tailwind CSS

[🔗 Live Demo](https://fin-pilot-tau.vercel.app/)

---

## 📌 Overview

FinPilot is an intelligent financial management platform designed to help users manage their personal finances with ease and clarity. Whether it's tracking expenses, managing multiple accounts, or setting AI-powered financial goals — FinPilot has it covered.

🔍 It leverages **Google Gemini AI** to scan receipts, generate monthly analytical reports, and provide valuable financial insights.  
🔐 With secure login via **Clerk** and **Arcjet** protection, FinPilot ensures privacy and safety for all users.

---

## ✨ Features

- ✅ Expense tracking with AI-generated suggestions
- 🧾 Receipt scanning powered by Gemini AI
- 📅 Budget planner with alert system
- 🎯 AI-powered financial goal setting
- 📊 Real-time analytics dashboard
- 📈 Visualized financial reports and trends
- 🔐 Secure authentication (Clerk + JWT)
- 🛡️ Application security via Arcjet
- 📬 Email alerts (e.g., budget limit warnings, monthly reports) via **Inngest**

---

## 🧰 Tech Stack

| Category      | Tools Used                           |
|---------------|--------------------------------------|
| Frontend      | Next.js, Tailwind CSS                |
| Backend/API   | Next.js API Routes, Supabase         |
| AI Integration| Google Gemini API                    |
| Auth & Security| Clerk, JWT, Arcjet                  |
| Automation    | Inngest (for background tasks)       |
| Email Service | Resend                               |

---


⚙️ Environment Variables
Here’s a sample .env structure you'll need to set up:

env
Copy
Edit
DATABASE_URL=
DIRECT_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

GEMINI_API_KEY=

RESEND_API_KEY=

ARCJET_KEY=

🧪 Getting Started (Local Setup)
Clone the repo

git clone https://github.com/your-username/finpilot.git
cd finpilot

Install dependencies

npm install --legacy-peer-deps

Setup environment

Copy .env.example to .env.local

Add your Supabase, Clerk, Gemini, Resend, and Arcjet keys

Run the development server

npm run dev
Open http://localhost:3000 to view the app.

🖼️ Screenshots
Add screenshots or GIFs here to show off the dashboard, receipt scanner, or AI reports.

📬 Contact
Ayush Prasad
📧 ayush.tesla@gmail.com
🌐 [LinkedIn](https://www.linkedin.com/in/ayush-prasad-b3508a253/)

📄 License
This project is licensed under the MIT License.

Made with ❤️ by Ayush Prasad

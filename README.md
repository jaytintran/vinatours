# 🌍 Vinatours – Modern AI-Powered Travel Platform

**Vinatours** is a sleek, scalable travel agency platform that merges cutting-edge AI with real-time trip booking. Built with a clean React 19 stack, modular architecture, and beautiful UI — it delivers an effortless experience for both users and admins.

> ✈️ From wanderlust to wheels up — let AI craft the perfect journey.

---

## ⚙️ Tech Stack

* ⚛ **React 19** (Concurrent & Streamlined UI)
* 🔀 **React Router v7 (Framework Mode)**
* 🎨 **Tailwind CSS** – Utility-first, blazing fast styling
* ⚡ **Vite** – Ultra-fast dev environment
* 🧠 **Syncfusion** – Interactive charts & UI components
* 🧩 **Appwrite** – Backend-as-a-Service: DB, Auth, Storage
* 🤖 **Gemini AI** – Itinerary generation engine
* 💳 **Stripe** – Seamless payments
* 🖼 **Unsplash API** – Dynamic image sourcing
* 🛡 **Sentry** – Error monitoring & alerting

---

## 🔋 Core Features

### Public Website

* 🤖 **AI-Powered Itinerary Generator**
  Generate custom travel plans based on:

    * Destination country
    * Travel style (luxury, backpacking, etc.)
    * Interests (nature, history, nightlife, etc.)
    * Group type (solo, couple, family, friends)
    * Budget

* 🛒 **Trip Booking System**
  Browse & book curated trips directly from the site.

### Admin Dashboard

* 📊 **Analytics & Metrics**
  Monitor user growth and trip popularity.

* 📋 **Trip & User Management**
  CRUD operations for trips and user accounts.

* 📈 **Charts & Stats Table**
  Visualize performance using Syncfusion components.

* 🔍 **Detailed Trip Overview**
  Deep insights on each itinerary.

### System-Wide

* 🧱 **Modular Architecture**
  Clean, scalable codebase with reusable components.

* 🔐 **Secure Authentication & Data**
  Managed with Appwrite’s built-in auth.

* 📱 **Responsive Design**
  Mobile-ready UI for all devices.

---

## 🚀 Quick Start

### Prerequisites

Make sure you have the following:

* **Node.js**
* **npm**
* **Git**

---

### 🧬 Clone the Repo

```bash
git clone https://github.com/jaytintran/vinatours.git
cd vinatours
```

---

### 📦 Install Dependencies

```bash
npm install
```

---

### 🛠 Setup Environment Variables

Create a `.env` file in the project root:

```env
VITE_SYNCFUSION_LICENSE_KEY=
VITE_APPWRITE_PROJECT_ID=
VITE_APPWRITE_API_ENDPOINT=
VITE_APPWRITE_API_KEY=
VITE_APPWRITE_DATABASE_ID=
VITE_APPWRITE_USERS_COLLECTION_ID=
VITE_APPWRITE_ITINERARY_COLLECTION_ID=
STRIPE_SECRET_KEY=
GEMINI_API_KEY=
UNSPLASH_ACCESS_KEY=
VITE_BASE_URL=http://localhost:5173
```

Replace the values above with your actual credentials.

---

### ▶️ Run the Dev Server

```bash
npm run dev
```

The app should now be running at:
📍 [http://localhost:5173](http://localhost:5173)

---

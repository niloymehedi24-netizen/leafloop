# 🌿 LeafLoop

A modern full-stack Plant Marketplace where users can explore, add, manage, edit, and discover beautiful indoor and outdoor plants. Built with Next.js, TypeScript, Express.js, MongoDB, and JWT Authentication.

---

## 🔗 Live Demo

### Frontend

https://your-frontend.vercel.app

### Backend API

https://leafloop-api.onrender.com

> Replace the links above after deployment.

---

# 📖 Project Overview

LeafLoop is a responsive full-stack web application that allows plant lovers to browse, add, update, and manage plant listings. The application provides secure authentication using JWT and offers a clean dashboard for sellers to manage their inventory.

---

# ✨ Features

### 🌱 Authentication

- User Registration
- User Login
- JWT Authentication
- Protected Routes

### 🌿 Plant Management

- Add New Plant
- Update Plant
- Delete Plant
- Manage My Plants

### 🔍 Explore Plants

- Browse All Plants
- Search by Plant Name
- Filter by Category
- Sort by Price

### 📄 Plant Details

- Individual Plant Details Page
- Seller Information
- Care Level
- Stock Status

### 📱 UI & UX

- Fully Responsive
- Modern Design
- Clean Dashboard
- Optimized Images
- Loading States
- Empty State UI

---

# 🛠 Tech Stack

## Frontend

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Axios
- React Icons

## Backend

- Node.js
- Express.js
- TypeScript
- MongoDB
- JWT
- bcryptjs
- Validator

---

# 📂 Folder Structure

## Frontend

```text
src/
│
├── app/
├── components/
├── services/
├── providers/
├── lib/
└── types/
```

## Backend

```text
src/
│
├── app.ts
├── auth.ts
├── db.ts
├── index.ts
├── middleware.ts
├── routes.ts
└── types.ts
```

---

# 🔐 Environment Variables

## Frontend (.env.local)

```env
NEXT_PUBLIC_API_URL=BACKEND_API
```

## Backend (.env)

```env
PORT=8000

MONGODB_URI=MONGODB_URI

JWT_SECRET=SECRET_KEY
```

---

# 🚀 Installation

## Clone Repository

```bash
git clone <repository-url>
```

---

## Frontend

```bash
cd leafloop-client
```

Install packages

```bash
npm install
```

Run

```bash
npm run dev
```

---

## Backend

```bash
cd leafloop-server
```

Install packages

```bash
npm install
```

Run

```bash
npm run dev
```

---

# 📦 API Endpoints

## Authentication

| Method | Endpoint        | Description   |
| ------ | --------------- | ------------- |
| POST   | `/api/register` | Register User |
| POST   | `/api/login`    | Login User    |

---

## Plants

| Method | Endpoint                 | Description            |
| ------ | ------------------------ | ---------------------- |
| GET    | `/api/plants`            | Get All Plants         |
| GET    | `/api/public/plants/:id` | Get Single Plant       |
| POST   | `/api/plants`            | Add Plant              |
| PATCH  | `/api/plants/:id`        | Update Plant           |
| DELETE | `/api/plants/:id`        | Delete Plant           |
| GET    | `/api/my-plants`         | Get Logged User Plants |

---

# 👨‍💻 Author

**Mehedi Hasan Niloy**

- GitHub: https://github.com/niloymehedi24-netizen
- LinkedIn: https://www.linkedin.com/in/mehedi-niloy/

---

# 📄 License

This project is developed for educational purposes.

# 💸 Money Transfer App (Simulation)

This is a full-stack **Money Transfer App (Simulation)** built with **Express.js** and **MongoDB** on the backend, and **React.js** on the frontend. The app allows users to **sign up**, **log in**, and **simulate sending money** to other users. This project demonstrates secure authentication, clean component architecture, and a robust backend with error handling and validation.

---

## 🚀 Features

### ✅ Backend (Express.js + MongoDB)
- User **Sign Up** and **Sign In** functionality
- **JWT-based Authentication** via middleware
- **Zod** for robust input validation
- **Router-level routing** for clean API structure
- **Custom error handling** for better debugging
- **CORS configured** to support cross-origin requests
- Built using **Mongoose** for seamless MongoDB interaction

### 🌐 Frontend (React.js)
- Modern UI with **reusable components**
- **Routing** handled using `Link` and `useNavigate()` from React Router
- **Axios** used for all API requests
- Handles **specific API errors** and displays appropriate messages
- Simple, clean structure for scalability and maintenance

---


## 🔐 Authentication

- JWT tokens are issued upon login and are verified using middleware.
- Protected routes ensure only authenticated users can access sensitive endpoints.

---

## 📦 Tech Stack

| Frontend         | Backend           | Libraries/Tools     |
|------------------|-------------------|----------------------|
| React.js         | Node.js + Express | JWT Authentication  |
| Axios            | MongoDB + Mongoose| Zod (Validation)     |
| React Router     | CORS Middleware   | dotenv               |

---

## 🧪 How to Run the Project Locally


```bash
#Clone project
git clone https://github.com/ssjamdade/Money-Transfer-App.git

cd Money-Transfer-App

#Start Backend
cd backend
npm install
npm run dev

#Start Frontend
cd frontend
npm install
npm run dev
```


## Note:
This app is not connected to any real banking API — it is only a simulation.

Great for learning full-stack development and understanding how authentication, validation, and client-server interaction works.
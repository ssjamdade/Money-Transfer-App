# 💸 Money Transfer App (Simulation)

This is a simple full-stack **Money Transfer App (Simulation)** built with **Express.js** and **MongoDB** on the backend, and **React.js** on the frontend. The app allows users to **sign up**, **log in**, and **simulate sending money** to other users. This project demonstrates secure authentication, clean component architecture, and a robust backend with error handling, validation, and transactional consistency.

Live Url: https://simplepaymentapp.netlify.app/

---

## 🚀 Features

### ✅ Backend (Express.js + MongoDB)

- User **Sign Up** and **Sign In** functionality  
- **Argon2 password hashing** for secure password storage  
- **JWT-based Authentication** via middleware  
- **Zod** for robust input validation  
- **Router-level routing** for clean API structure  
- **Custom error handling** for better debugging  
- **CORS configured** to support cross-origin requests  
- **MongoDB sessions used in transaction route** for ensuring consistency during money transfers  
- Built using **Mongoose** for seamless MongoDB interaction  

### 🌐 Frontend (React.js)

- Modern UI with **reusable components**  
- **Routing** handled using `Link` and `useNavigate()` from React Router  
- **Axios** used for all API requests  
- Handles **specific API errors** and displays appropriate messages  
- Simple, clean structure for scalability and maintenance  

---

## 🔐 Authentication

- Passwords are hashed using **Argon2**, a secure and modern password hashing algorithm.  
- JWT tokens are issued upon login and are verified using middleware.  
- Protected routes ensure only authenticated users can access sensitive endpoints.  

---

## 🔁 Transactions

- All money transfer operations are wrapped in **MongoDB sessions** to ensure **atomicity** and **data consistency**.
- This prevents partial updates, such as deducting from the sender without crediting the recipient.
- If any step in the transfer process fails, the entire operation is rolled back safely.

---

## 📦 Tech Stack

| Frontend         | Backend           | Libraries/Tools             |
|------------------|-------------------|------------------------------|
| React.js         | Node.js + Express | JWT Authentication           |
| Axios            | MongoDB + Mongoose| Argon2 (Password Hashing)    |
| React Router     | CORS Middleware   | Zod (Validation)   |
|                  |                   | MongoDB Transactions (Sessions) |

---

## 🧪 How to Run the Project Locally

```bash
# Clone project
git clone https://github.com/ssjamdade/Money-Transfer-App.git

cd Money-Transfer-App

# Start Backend
cd backend
npm install
npm run dev

# Start Frontend on another terminal
cd frontend
npm install
npm run dev

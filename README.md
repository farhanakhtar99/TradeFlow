# 📈 TradeFlow — Stock Trading Platform

TradeFlow is an **end-to-end MERN full-stack stock trading platform** that allows users to simulate real trading activities such as buying and selling stocks, tracking portfolios, and monitoring market data through an interactive dashboard.

The project is built with a modern architecture where **frontend, backend, and dashboard are deployed independently**, enabling scalability and easier maintenance.

---

🌐 Live Deployments: https://trade-flow-ruby.vercel.app

## 🚀 Features

- 🔐 User authentication & session management
- 📊 Interactive trading dashboard
- 💼 Portfolio management
- 💰 Buy and sell stocks simulation
- 📈 Real-time style market data representation
- 🧾 Transaction history tracking
- 🎨 Responsive UI with Material UI & Bootstrap

---

## 🏗️ Architecture

TradeFlow follows a **distributed deployment architecture**:

- **Frontend** → User-facing trading interface
- **Backend API** → Handles business logic & database operations
- **Dashboard** → Analytics and portfolio insights

Each service is deployed separately for better scalability and independent updates.

---

## ✨ Key Features

### 🔐 Authentication

- Secure login & signup using **Passport.js**
- Session-based authentication with persistent login
- Protected routes with authentication middleware
- Secure password hashing & validation

### 📊 User Dashboard

- Live holdings & open positions overview
- Portfolio value and performance insights
- Interactive charts and visual analytics
- Fully responsive and intuitive UI

### 💱 Order Management

- Seamless Buy & Sell order execution
- Real-time balance and quantity validation
- Transaction history tracking
- Instant UI updates with error handling

### ⚙️ Backend (API Layer)

- Structured MVC architecture with **Node.js & Express**
- **MongoDB Atlas** database with Mongoose ODM
- Session storage using Connect-Mongo
- Robust error handling and API validation

### 🎨 UI & Experience

- Modern interface built with **Material UI + Bootstrap**
- Smooth navigation and component-based design
- Optimized for performance and scalability

---

## 🛠️ Tech Stack

### Frontend

- React (Vite)
- Material UI
- Bootstrap
- Axios

### Backend

- Node.js
- Express.js
- MongoDB (Atlas)
- Mongoose
- Express Session & Connect-Mongo

### Dashboard

- React
- Charting libraries
- Material UI

---

## 📂 Project Structure

```
TradeFlow/
│
├── frontend/      # User trading interface
├── backend/       # REST API & server
├── dashboard/     # Analytics dashboard
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/tradeflow.git
cd tradeflow
```

### 2️⃣ Setup Backend

```bash
cd backend
npm install
nodemon index.js
```

### 3️⃣ Setup Frontend

```bash
cd frontend
npm install
npm run dev
```

### 4️⃣ Setup Dashboard

```bash
cd dashboard
npm install
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file in the backend folder:

```
PORT=8080
MONGO_URL=your_mongodb_connection_string
SECRET=your_session_secret
CLIENT_URL=your_frontend_url
```

---

## 📸 Screens

- Trading Interface
- Portfolio Overview
- Market Watchlist
- Analytics Dashboard

_(Add screenshots here)_

---

## 🧪 Future Improvements

- Real market API integration
- Advanced chart indicators
- Order types (limit, stop-loss)
- Notifications system
- Mobile responsiveness improvements

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repo
2. Create a new branch
3. Commit your changes
4. Open a pull request

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Author

**Farhan Akhtar**
B.Tech IT Student

If you like this project, consider giving it a ⭐ on GitHub!

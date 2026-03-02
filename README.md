# 📈 TradeFlow — Stock Trading Platform

TradeFlow is an **end-to-end MERN full-stack stock trading platform** that allows users to simulate real trading activities such as buying and selling stocks, tracking portfolios, and monitoring market data through an interactive dashboard.

The project is built with a modern architecture where **frontend, backend, and dashboard are deployed independently**, enabling scalability and easier maintenance.

---

🌐 Live Deployments

| Service               | Link                                                                                       |
| --------------------- | ------------------------------------------------------------------------------------------ |
| **Main Frontend**     | [https://trade-flow-eta.vercel.app/](https://trade-flow-eta.vercel.app/)                   |
| **User Dashboard**    | [https://trade-flow-f547.vercel.app/](https://trade-flow-f547.vercel.app/)                 |
| **Backend API**       | [https://tradeflow-b7hr.onrender.com](https://tradeflow-b7hr.onrender.com)                 |
| **GitHub Repository** | [https://github.com/farhanakhtar99/TradeFlow](https://github.com/farhanakhtar99/TradeFlow) |


## 🚀 Features

* 🔐 User authentication & session management
* 📊 Interactive trading dashboard
* 💼 Portfolio management
* 💰 Buy and sell stocks simulation
* 📈 Real-time style market data representation
* 🧾 Transaction history tracking
* 🎨 Responsive UI with Material UI & Bootstrap

---

## 🏗️ Architecture

TradeFlow follows a **distributed deployment architecture**:

* **Frontend** → User-facing trading interface
* **Backend API** → Handles business logic & database operations
* **Dashboard** → Analytics and portfolio insights

Each service is deployed separately for better scalability and independent updates.

---

## 🛠️ Tech Stack

### Frontend

* React (Vite)
* Material UI
* Bootstrap
* Axios

### Backend

* Node.js
* Express.js
* MongoDB (Atlas)
* Mongoose
* Express Session & Connect-Mongo

### Dashboard

* React
* Charting libraries
* Material UI

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
npm run dev
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

* Trading Interface
* Portfolio Overview
* Market Watchlist
* Analytics Dashboard

*(Add screenshots here)*

---

## 🧪 Future Improvements

* Real market API integration
* Advanced chart indicators
* Order types (limit, stop-loss)
* Notifications system
* Mobile responsiveness improvements

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


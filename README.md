# 🌟 Silikart 🌟

![MERN Stack](https://img.shields.io/badge/MERN-Stack-green) ![Node.js](https://img.shields.io/badge/Node.js-16.0.0-green) ![React](https://img.shields.io/badge/React-17.0.0-blue) ![MongoDB](https://img.shields.io/badge/MongoDB-4.4.0-green) ![Express.js](https://img.shields.io/badge/Express.js-4.17.1-green)

## 🚀 Project Overview

**Silikart** is a one-stop solution for all freshers looking for engineering essentials. Seniors can donate their products, which are managed by an admin in our storehouse. These products are displayed on our website and can be issued by juniors for one semester without any cost. Charges apply only for damaged or misplaced products.

### 🛠 Problem Statement

Every time a new fresher joins, they need to buy a lot of commodities required for specific subjects. Meanwhile, students in their 3rd and 4th years, who no longer need these products, have no easy way to pass them on. 

### 🌟 Solution

We aim to organize the communication between the needy and needful with our project, Silikart. Our platform aims to:
- Reduce overhead costs for freshers.
- Increase the reusability of engineering essentials.
- Promote sustainability.

## 📦 Products

1. Chemistry lab apron
2. Manufacturing lab apron
3. Engineering Drawing toolkit (drafter + chart paper holder)
4. Steam table
5. Interest table
6. Scientific calculator
7. Geometry box

## 🛠️ Tech Stack

- **Frontend**: ![React](https://img.shields.io/badge/React-17.0.0-blue), ![HTML](https://img.shields.io/badge/HTML-5-orange), ![CSS](https://img.shields.io/badge/CSS-3-blue), ![Bootstrap](https://img.shields.io/badge/Bootstrap-5-blue)
- **Backend**: ![Node.js](https://img.shields.io/badge/Node.js-16.0.0-green), ![Express.js](https://img.shields.io/badge/Express.js-4.17.1-green)
- **Database**: ![MongoDB](https://img.shields.io/badge/MongoDB-4.4.0-green)
- **Authentication**: JWT
- **State Management**: Context API
- **Security**: Bcrypt for password encryption, CORS
- **Environment Variables**: .env file for global data

## 🔧 Installation and Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/swatinath/silikart.git
   cd silikart
   ```

2. **Install the dependencies for both frontend and backend:**
   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the `server` directory and add the following:
   ```
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```

4. **Run the development server:**
   ```bash
   # In the backend directory
   npm run server

   # In the frontend directory
   npm run dev
   ```

5. **Open your browser and navigate to:**
   ```
   http://localhost:3000
   ```



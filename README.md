# 🛒 Ecom-Store

A full-stack responsive e-commerce web application built using the **MERN** stack (MongoDB, Express.js, React, Node.js). The application allows users to browse products, add them to a cart, and place orders. The UI is styled with Bootstrap for a clean and responsive experience.

---

## 📌 Project Overview

**Ecom-Store** is a dynamic e-commerce platform where users can:
- Browse products on the homepage
- Add products to their cart
- Navigate to the cart page and review selections
- Confirm their orders

Order details are stored in MongoDB for persistence. This project demonstrates the integration of frontend and backend using React and Node.js respectively, with a RESTful API and MongoDB as the database.

---


## 🚀 Features

- 🛍️ Product listing page
- 🧺 Cart page to view selected items
- 🧾 Order placement and storage in MongoDB
- 🔁 Seamless navigation using React Router
- 💻 Fully responsive UI (Bootstrap)

---

## 🛠️ Tech Stack

**Frontend:**
- React.js
- Bootstrap
- HTML, CSS, JavaScript

**Backend:**
- Node.js
- Express.js
- MongoDB + Mongoose
- dotenv for config
- CORS enabled

---

## 📦 Installation & Setup

Follow these steps to run the project locally:

---

1. **Clone the repository**
 
    ```bash
   git clone https://github.com/buildsbynandini/Ecom-Store.git
   cd Ecom-Store
   ```

 ### Backend Setup

2. **Install dependencies**

   ```bash
   cd backend
   npm install
   ```

3. **Set up environment variables**

 In the root folder of the backend, create a file named `.env`
 Add the following line to it using your own MongoDB connection string:

  ```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

4. **Start the backend server**

    ```bash
   npm start
   ```

 ### Frontend Setup

 5. **Install dependencies**

  ```bash
   cd frontend
   npm install
   ```

6. **Set up environment variables**

In the root folder of the frontend, create a file named `.env`
 Add the following line:

 ```env
 REACT_APP_API_URL=http://localhost:5000/api/p1
```
 
 7. **Start the frontend app**

```bash
    npm start
   ```

---

 ## 🧪 Testing

Once both the frontend and backend servers are running:

1. Open your browser and go to: [http://localhost:4568](http://localhost:4568)
2. Browse products and add a few items to your cart.
3. Go to the cart page and place an order.
4. ✅ Check your MongoDB database to confirm that the order data has been successfully stored.
 
 ---

 ## 🚀 Live Demo

You can view the live frontend of the Ecom-Store project here:

🔗 [Live Frontend on Render](https://ecom-store-jt6x.onrender.com/)

---

## 🙌 Thank You

Thank you for checking out **Ecom-Store**!  
Feel free to connect with me:

- GitHub: [buildsbynandini](https://github.com/buildsbynandini)  
- Portfolio: [buildsbynandini.github.io/PortFolio](https://buildsbynandini.github.io/PortFolio/)  
- Email: nandinithedev@gmail.com

Happy coding! 🚀

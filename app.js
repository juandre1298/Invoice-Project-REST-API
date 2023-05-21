import express from "express";

import userRoutes from "./routes/users.routes.js";
import loginRoutes from "./routes/login.routes.js";
import productRoutes from "./routes/product.routes.js";
import invoiceRoutes from "./routes/invoice.routes.js";

import "./models/associations.js";

const app = express();

// Enable CORS middleware
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// middlewares
app.use(express.json());

// use routes

app.use(userRoutes);
app.use(loginRoutes);
app.use(productRoutes);
app.use(invoiceRoutes);

export default app;

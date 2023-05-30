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

// upload to S3

import multer from "multer";

const upload = multer({ dest: "uploads/" });

import { uploadFile } from "./AWS/s3.js";

app.post("/images", upload.single("image"), async (req, res) => {
  const file = req.file;
  console.log(file);
  try {
    const result = await uploadFile(file);

    console.log("result:", result);
  } catch (error) {
    console.log(error);
  }

  const description = req.body.description;
  res.send("new image uploaded to S3 bucket ok");
});

export default app;

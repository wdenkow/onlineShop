import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import { ProductModel } from "./models/productModel.js";

mongoose
  .connect(
    "mongodb+srv://admin:qwerty12345@cluster0.iou4w87.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("DB: Success connection"))
  .catch((err) => console.log("DB: Error connecting", err));

const app = express();
const PORT = 3002;

app.use(cors());
app.use(express.json());

app.get("/pizza", async (req, res) => {
  const pizza = await ProductModel.find({ productType: "pizza" }).exec();
  res.json(pizza);
});

app.get("/sauce", async (req, res) => {
  const pizza = await ProductModel.find({ productType: "sauce" }).exec();
  res.json(pizza);
});

app.listen(PORT, (req, res) => {
  console.log(`${PORT} listening`);
});

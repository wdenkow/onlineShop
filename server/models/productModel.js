import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  title: String,
  composition: String,
  productType: String,
  category: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: false,
  },
  weight: {
    type: Number,
    required: false,
  },
});

export const ProductModel = mongoose.model("ProductModel", productSchema);

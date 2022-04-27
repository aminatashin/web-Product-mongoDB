import mongoose from "mongoose";
const { Schema, model } = mongoose;
const prodectSchema = new Schema(
  {
    name: { type: String },
    brand: { type: String },
    category: { type: String },
    price: { type: Number },
  },
  { timestamps: true }
);
export default model("prodect", prodectSchema);

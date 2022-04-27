import express from "express";
import productmodel from "../../../models/productmodel.js";
// =========================================================
const productRouter = express.Router();
productRouter.post("/", async (req, res, next) => {
  try {
    const newProduct = await productmodel(req.body);
    const { _id } = await newProduct.save();
    res.send({ _id });
  } catch (error) {
    console.log(error);
    next(error);
  }
});
// ==========================================================
productRouter.get("/", async (req, res, next) => {
  try {
    const getProduct = await productmodel.find();

    res.send(getProduct);
  } catch (error) {
    console.log(error);
    next(error);
  }
});
export default productRouter;

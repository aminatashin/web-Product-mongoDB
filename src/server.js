import express from "express";
import mongoose from "mongoose";
import listEndpoints from "express-list-endpoints";
import cors from "cors";
import productRouter from "./services/products/prodect.js";
// ==================================================
const server = express();
const port = process.env.PORT || 3004;
// ==================================================
server.use(cors());
server.use(express.json());
// ===================================================
server.use("/product", productRouter);
// ===================================================
mongoose.connect(process.env.MONGO_CONNECTION);
mongoose.connection.on("connected", () => {
  console.log("mongoose is connected!!!");
  server.listen(port, () => {
    console.table(listEndpoints(server));
    console.log(`server is running ${port}`);
  });
});

import express from "express";
import mongoose from "mongoose";
import listEndpoints from "express-list-endpoints";
import cors from "cors";
// ==================================================
const server = express();
const port = process.env.PORT || 3004;
// ==================================================
server.use(cors());
server.use(express.json());
// ===================================================
// ===================================================
mongoose.connect(process.env.MONGO_CONNECTION);
mongoose.connection.on("connected", () => {
  console.log("mongoose is connected!!!");
  server.listen(port, () => {
    console.log(`server is running ${port}`);
  });
});

import express from "express";
import dotenv from "dotenv";
import connectDb from "./db/mongoose.js";
import productRouter from "./routes/product.routes.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

connectDb();

// Middlewares
app.use(express.json());

// All Routes
app.use("/api/products", productRouter);

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

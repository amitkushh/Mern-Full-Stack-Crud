import {
  getProducts,
  updateProduct,
  deleteProduct,
  createProduct,
} from "../controllers/product.controller.js";
import express from "express";

const productRouter = express.Router();

productRouter.post("/", createProduct);
productRouter.get("/", getProducts);
productRouter.put("/:id", updateProduct);
productRouter.delete("/:id", deleteProduct);

export default productRouter;

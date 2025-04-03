import productModel from "../models/product.models.js";

export const getProducts = async (req, res) => {
  try {
  } catch (error) {}
};

// Product Creation

export const createProduct = async (req, res) => {
  const product = req.body;

  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ success: false, message: "please provide all fields" });
  }

  const newProduct = new productModel(product);
  try {
    await newProduct.save();
    res.status(201).json({ success: true, date: newProduct });
  } catch (error) {
    console.log("Error in creating product", error.message);
    res.status(500).json({ success: false, message: "server error" });
  }
};

export const updateProduct = async (req, res) => {
  try {
  } catch (error) {}
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
  } catch (error) {
    console.log("Error in deleteing Product", error.message);
    res.status(500).json({ success: false, message: "server error" });
  }
};

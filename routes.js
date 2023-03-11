import express from "express";
import fileService from "./fileService.js";
import { addProduct, newProduct } from "./addProduct.js";

const router = express.Router();
const path = "./db/products.json";

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.get("/products", (req, res) => {
  const allProducts = JSON.parse(
    fileService.read("./db/products.json", "utf8")
  );
  res.send(allProducts);
  // console.log(allProducts);
});

router.post("/products", (req, res, next) => {
  const allProducts = JSON.parse(
    fileService.read("./db/products.json", "utf8")
  );
  // const newProduct = req.body;
  const newProduct = addProduct(newProduct);
  allProducts.push(newProduct);
  fileService.write("./db/products.json", JSON.stringify(allProducts), "utf8");
  res.send(newProduct);
  next();
});

export default router;

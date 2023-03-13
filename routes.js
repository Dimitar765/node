import express from "express";
import fileService from "./fileService.js";
import { v4 as uuidv4 } from "uuid";

// import { addProduct, newProduct } from "./_addProduct.js";

const router = express.Router();
// const path = "./db/products.json";

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
  res.send(req.body);
  const newProduct = req.body;
  const addId = uuidv4();
  const allProducts = JSON.parse(
    fileService.read("./db/products.json", "utf8")
  );
  const withId = { ...newProduct, id: addId };
  console.log(withId);
  allProducts.push(withId);
  fileService.write("./db/products.json", JSON.stringify(allProducts), "utf8");
  // next();
});

export default router;

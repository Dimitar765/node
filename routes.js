import express from "express";
import fileService from "./fileService.js";
import { v4 as uuidv4 } from "uuid";

// import { addProduct, newProduct } from "./_addProduct.js";

const router = express.Router();

const emptyJson = [];
const path = "./db/products.json";

router.get("/", (req, res) => {
  fileService.write("./db/products.json", JSON.stringify(emptyJson), "utf8");
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
  // console.log(withId);
  allProducts.push(withId);
  fileService.write("./db/products.json", JSON.stringify(allProducts), "utf8");
  // next();
});

router.patch("/products/:id", (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const allProducts = JSON.parse(
    fileService.read("./db/products.json", "utf8")
  );
  const updatedProduct = allProducts.find((product) => product.id === id);
  if (updatedProduct) {
    updatedProduct.name = name;
    updatedProduct.price = price;
  }
  fileService.write("./db/products.json", JSON.stringify(allProducts), "utf8");
  res.send(updatedProduct);
});

router.delete("/products/:id", (req, res) => {
  const { id } = req.params;
  const allProducts = JSON.parse(
    fileService.read("./db/products.json", "utf8")
  );
  const removeProduct = allProducts.find((product) => product.id === id);
  if (removeProduct) {
    const index = allProducts.indexOf(removeProduct);
    allProducts.splice(index, 1);
    fileService.write(
      "./db/products.json",
      JSON.stringify(allProducts),
      "utf8"
    );
  }
  res.send(removeProduct);
  console.log(`producut with id ${id} deleted`);
});

router.purge("/products", (req, res) => {
  fileService.purge("./db/products.json");
  res.send("Purged");
});

export default router;

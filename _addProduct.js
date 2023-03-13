import fileService from "./fileService.js";
import { v4 as uuidv4 } from "uuid";

// const newProduct = {
//   id: uuidv4(),
//   name: "blablabla",
//   price: 100,
//   rating: 4.5,
//   description: "This is product 1",
//   category: "Clothing",
//   isInStock: true,
// };

// const addProduct = (newProduct) => {
//   const products = JSON.parse(fileService.read("./db/products.json", "utf8"));
//   products.push(newProduct);
//   fileService.write("./db/products.json", JSON.stringify(products, null, 2));
// };

// addProduct(newProduct);

// export { newProduct, addProduct };

import express from "express";
import router from "./routes.js";
import bodyparser from "body-parser";

const app = express();
let time = new Date();

app.use((req, res, next) => {
  let curentTime = new Date();
  console.log("middleware test @", `${curentTime}`);
  next();
});

app.use(express.json());

app.use(router);

app.listen(3000, () => {
  console.log("up and running @", `${time}`);
});

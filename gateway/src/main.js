import express from "express";
import axios from "axios";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());

app.use("/product", async (req, res) => {
  const response = await axios({
    method: req.method,
    url: process.env.PRODUCT_ROUTE + req.url, // URL do microserviço de usuários
    data: req.body,
  });
  res.json(response.data);
});

const port = process.env.GATEWAY_PORT;
app.listen(process.env.GATEWAY_PORT, () => {
  console.log(`Gateway is running on port ${port} 🚀`);
});

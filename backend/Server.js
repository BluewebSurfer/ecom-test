import express from "express";         
import cors from "cors"; 
import dotenv from 'dotenv';
import userRouter from "./routers/userRouters.js";
import productRouter from "./routers/productRouter.js";
import connectDB from "./config/db.js";
import orderRouter from './routers/orderRouter.js';
import colors from 'colors';


 
dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


connectDB()
app.use("/api/users", userRouter);
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);
app.get('/api/config/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
});
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Rahul Server");
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`.yellow.bold);
});

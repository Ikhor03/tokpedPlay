import express from "express";
import { addProduct, getAllProducts, getProductById } from "../controller/products.js";

const router = express.Router();

router.post('/products', addProduct);

router.get('/products', getAllProducts);

router.get('/products/:id', getProductById);


export default router;

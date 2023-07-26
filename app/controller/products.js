import Product from '../models/products.js';

// input product
export const addProduct = async (req, res, next) => {
    const { name, price, imageUrl, productUrl, discount, videoId } = req.body;
    const product = new Product({ name, price, imageUrl, productUrl, discount, video : videoId });

    try {
        const savedProduct = await product.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        next(error); 
    }
};

// get all products
export const getAllProducts = async (req, res, next) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        next(error); 
    }
};

// get product by id
export const getProductById = async (req, res, next) => {
    const { id } = req.params;

    try {
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(product);
    } catch (error) {
        next(error); 
    }
};

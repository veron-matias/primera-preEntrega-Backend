import express from 'express'
import {ProductManager} from './managers/productManager.js'
import productsRouter from './routes/products.router.js';
import { CartManager } from './managers/cartManager.js';
import { cartsRouter } from './routes/carts.router.js';

const PORT = 8080;
const app = express();

export const productManager = new ProductManager;
export const cartManager = new CartManager;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/products/', productsRouter)  //localhost:8080/api/products
app.use('/api/carts/', cartsRouter)   //http://localhost:8080/api/carts/


// Corriendo en puerto 8080
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
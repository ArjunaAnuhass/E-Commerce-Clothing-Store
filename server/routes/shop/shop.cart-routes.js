import express from 'express'
import { addToCart, deleteCartItem, fetchCartItems, updateCartItemQuantity } from '../../controller/shop/cart-controller.js';

const cartRoutes = express.Router();

cartRoutes.post('/add', addToCart);
cartRoutes.get('/get/:userId', fetchCartItems);
cartRoutes.put('/update-cart', updateCartItemQuantity);
cartRoutes.delete('/:userId/:productId', deleteCartItem);

export default cartRoutes
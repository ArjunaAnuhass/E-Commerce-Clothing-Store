import express from 'express'
import { getFilteredProducts } from '../../controller/shop/shop.product-controller.js';

const shopProductRoutes = express.Router();

shopProductRoutes.get('/get', getFilteredProducts)

export default shopProductRoutes;
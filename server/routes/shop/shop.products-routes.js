import express from 'express'
import { getFilteredProducts, getProductDetails } from '../../controller/shop/shop.product-controller.js';

const shopProductRoutes = express.Router();

shopProductRoutes.get('/get', getFilteredProducts)
shopProductRoutes.get('/get/:id', getProductDetails)

export default shopProductRoutes;
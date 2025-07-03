import express from 'express'
import { createOrder } from '../../controller/shop/order-controller.js';


const orderRouter = express.Router();

orderRouter.post('/create', createOrder);


export default orderRouter;
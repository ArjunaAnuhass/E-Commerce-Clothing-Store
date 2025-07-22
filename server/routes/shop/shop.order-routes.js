import express from 'express'
import { capturePayment, createOrder } from '../../controller/shop/order-controller.js';


const orderRouter = express.Router();

orderRouter.post('/create', createOrder);
orderRouter.post('/capture', capturePayment);


export default orderRouter;
import express from 'express'
import { addAddress, deleteAddress, editAddress, fetchAllAddress } from '../../controller/shop/shop.address-controller.js';


const addressRoutes = express.Router();

addressRoutes.post('/add', addAddress);
addressRoutes.get('/get/:userId', fetchAllAddress);
addressRoutes.put('/update/:userId/:addressId', editAddress);
addressRoutes.delete('/delete/:userId/:addressId', deleteAddress);

export default addressRoutes
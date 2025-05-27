import express from 'express'
import { upload } from '../../config/cloudinary.js';
import { addProduct, deleteProduct, editProduct, fetchAllProducts, handleImageUpload } from '../../controller/admin/admin.product-controller.js';

const adminProductRoutes = express.Router();

adminProductRoutes.post('/upload-image', upload.single("my_file"), handleImageUpload)
adminProductRoutes.post('/add', addProduct);
adminProductRoutes.put('/edit/:id', editProduct);
adminProductRoutes.delete('/delete/:id', deleteProduct);
adminProductRoutes.get('/get', fetchAllProducts);

export default adminProductRoutes;
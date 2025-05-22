import express from 'express'
import { upload } from '../../config/cloudinary.js';
import { handleImageUpload } from '../../controller/admin/admin.product-controller.js';

const adminProductRoutes = express.Router();

adminProductRoutes.post('/upload-image', upload.single("my_file"), handleImageUpload)

export default adminProductRoutes;
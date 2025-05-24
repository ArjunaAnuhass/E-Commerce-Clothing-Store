import { imageUploadUtil } from "../../config/cloudinary.js";
import Product from "../../models/Product.js";


const handleImageUpload = async (req, res) => {
    try {
        const b64 = Buffer.from(req.file.buffer).toString("base64");
        const url = "data:" + req.file.mimetype + ";base64," + b64;
        const result = await imageUploadUtil(url);

        res.json({success: true, result});
    } catch (error) {
        console.log(error);
        res.json({success: true, message: "Error occurred"});
    }
}

//add a new product
const addProduct = async(req, res) => {

    try {
      const {image, title, description, category, brand, price, salePrice, totalStock} = req.body;

      const newlyCreatedProducts = new Product({
        image, title, description, category, brand, price, salePrice, totalStock
      });
      await newlyCreatedProducts.save();
      
      res.status(201).json({success: true, data: newlyCreatedProducts});
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, message: "Error occurred"});
    }
}

//fetch all products
const fetchAllProducts = async(req, res) => {

    try {
        const listOfProducts = await Product.find({});
        res.status(200).json({success: true, data: listOfProducts})
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, message: "Error occurred in fetching product data"});
    }
}

//edit a product
const editProduct = async(req, res) => {

    try {
        const {id} = req.params;
        const {image, title, description, category, brand, price, salePrice, totalStock} = req.body;

        const findProduct = await Product.findById(id);
        if (!findProduct) {
            return res.status(404).json({success: false, message: "Product not found by this id: ", id});
        }

        findProduct.title = title || findProduct.title;
        findProduct.description = description || findProduct.description;
        findProduct.category = category || findProduct.category;
        findProduct.brand = brand || findProduct.brand;
        findProduct.price = price || findProduct.price;
        findProduct.salePrice = salePrice || findProduct.salePrice;
        findProduct.totalStock = totalStock || findProduct.totalStock;
        findProduct.image = image || findProduct.image;

        await findProduct.save();
        
        res.status(200).json({success: true, message: "Product edited successfully",  data: findProduct});
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, message: "Error occurred in edit product data"});
    }
}

//delete a product
const deleteProduct = async(req, res) => {

    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);

        if (!product) {
            return res.status(404).json({success: false, message: "Product not found by this id: ", id});
        }
        else{
            return res.status(200).json({success: true, message: "Product Deleted successfully"});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, message: "Error occurred in delete product"});
    }
}



export { handleImageUpload, addProduct, fetchAllProducts, editProduct, deleteProduct }
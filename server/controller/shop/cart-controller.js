import Cart from "../../models/Cart.js";
import Product from "../../models/Product.js";


const addToCart = async(req, res) => {
    try {
        const {userId, productId, quantity} = req.body;
        
        if (!userId || !productId || quantity <= 0) {
            return res.status(400).json({success: false, message: "Invalid data provided!"});
        }

        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({success: false, message: "Product not found!"});
        }

        let cart = await Cart.findOne({userId: userId});
        if (!cart) {
            cart = new Cart({userId, items: []}); 
        }

        const findCurrentProductIndex = cart.items.findIndex((item) => item.productId.toString() === productId);

        if (findCurrentProductIndex === -1) {
            cart.items.push({productId, quantity});
        }
        else{
            cart.items[findCurrentProductIndex].quantity += quantity;
        }
        await cart.save();
        res.status(200).json({success: true, data: cart});

    } catch (error) {
        console.log(error, "error: ")
        res.status(500).json({success: true, message: "Error occurred"});
    }
}


const fetchCartItems = async(req, res) => {
    try {
        const {userId} = req.params;

        if (!userId) {
            return res.status(400).json({success: false, message: "User id not found...And it is mandatory!"});
        }

        const cart = await Cart.findOne({userId: userId}).populate({
            path: 'items.productId',
            select: 'image, title, price, salePrice'
        });

        if (!cart) {
            return res.status(400).json({success: false, message: "Cart not found!"});
        }

        const validItems = cart.items.filter((productItem) => productItem.productId);

        if (validItems.length < cart.items.length) {
            cart.items = validItems;
            await Cart.save();
        }

        const populateCartItems = validItems.map((item) => ({
            productId: item.productId._id,
            image: item.productId.image,
            title: item.productId.title,
            price: item.productId.price,
            salePrice: item.productId.salePrice,
            quantity: item.productId.quantity
        }));

        res.status(200).json({success: true,
            data: {
                ...cart._doc,
                items: populateCartItems

            },
        });

    } catch (error) {
        console.log(error, "error: ")
        res.status(500).json({success: true, message: "Error occurred"});
    }
}


const updateCartItemQuantity = async(req, res) => {
    try {
        
    } catch (error) {
        console.log(error, "error: ")
        res.status(500).json({success: true, message: "Error occurred"});
    }
}


const deleteCartItem = async(req, res) => {
    try {
        
    } catch (error) {
        console.log(error, "error: ")
        res.status(500).json({success: true, message: "Error occurred"});
    }
}

export { addToCart, fetchCartItems, updateCartItemQuantity, deleteCartItem }
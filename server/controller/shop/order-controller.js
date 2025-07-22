import paypal from "../../config/paypal.js";
import Order from "../../models/Order.js";

const createOrder = async (req, res) => {
  try {
    const {
      userId,
      cartItems,
      addressInfo,
      orderStatus,
      paymentMethod,
      paymentStatus,
      totalAmount,
      orderDate,
      orderUpdateDate,
      paymentId,
      payerId,
      cartId
    } = req.body;

    const create_payment_json = {
        intent: 'sale',
        payer: {
            payment_method: 'paypal',
        },
        redirect_urls: {
            return_url: "http://localhost:5173/shop/paypal-return",
            cancel_url: "http://localhost:5173/shop/paypal-cancel"
        },
        transactions: [
            {
                item_list: {
                    items: cartItems.map(item => ({
                        name: item.title,
                        sku: item.productId,
                        price: item.price.toFixed(2),
                        currency: "USD",
                        quantity: item.quantity,
                    })),
                },
                amount: {
                    currency: "USD",
                    total: totalAmount.toFixed(2),
                },
                description: "description",
            }
        ]
    }


    paypal.payment.create(create_payment_json, async (error, paymentInfo) => {
        if (error) {
            console.log(error);
            return res.status(404).json({success: false, message: "Error while creating paypal payment"});
        }
        else{
            const newlyCreatedOrder = new Order({
                userId,
                cartId,
                cartItems,
                addressInfo,
                orderStatus,
                paymentMethod,
                paymentStatus,
                totalAmount,
                orderDate,
                orderUpdateDate,
                paymentId,
                payerId,
            });

            await newlyCreatedOrder.save();

            const approvalURL = paymentInfo.links.find(link => link.rel === 'approval_url').href;

            return res.status(201).json({success: true, message: "Order created successfully", approvalURL, orderId: newlyCreatedOrder._id});
        }
    })

  } catch (error) {
    res.status(500).json({ success: false, message: "Error occurred" });
  }
};


export { createOrder }

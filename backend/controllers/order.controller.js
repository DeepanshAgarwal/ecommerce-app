import orderModel from "../models/order.model.js";
import userModel from "../models/user.model.js";

//Place orders using COD
const placeOrder = async (req, res) => {
    try {
        const { userId, items, amount, address } = req.body;

        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod: "COD",
            payment: false,
            date: Date.now(),
        };

        const newOrder = new orderModel(orderData);
        await newOrder.save();

        await userModel.findByIdAndUpdate(userId, { cartdata: {} });
        res.json({ success: true, message: "Order Placed" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

//Place orders using Stripe
const placeOrderStipe = async (req, res) => {};

//Place orders using Razorpay
const placeOrderRazorpay = async (req, res) => {};

//All orders data for Admin Panel
const allOrders = async (req, res) => {};

//User Order Data for Frontend
const userOrders = async (req, res) => {};

//Update order status from Admin Panel
const updateStatus = async (req, res) => {};

export {
    placeOrder,
    placeOrderRazorpay,
    placeOrderStipe,
    allOrders,
    userOrders,
    updateStatus,
};

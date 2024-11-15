import express from "express";
import {
    placeOrder,
    placeOrderRazorpay,
    placeOrderStipe,
    allOrders,
    userOrders,
    updateStatus,
} from "../controllers/order.controller.js";
import adminAuth from "../middlewares/adminAuth.middleware.js";
import userAuth from "../middlewares/userAuth.middleware.js";

const orderRouter = express.Router();

//Admin routes
orderRouter.post("/list", adminAuth, allOrders);
orderRouter.post("/status", adminAuth, updateStatus);

//payment routes
orderRouter.post("/place", userAuth, placeOrder);
orderRouter.post("/stripe", userAuth, placeOrderStipe);
orderRouter.post("/razorpay", userAuth, placeOrderRazorpay);

//user routes
orderRouter.post("/userorders", userAuth, userOrders);

export default orderRouter;

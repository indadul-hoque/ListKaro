import { Router } from "express";

import searchProductRoute from "./searchProduct.route.js";
import productsRoute from "./products.route.js";
import ocrRoute from "./ocr_route.js";
import userRoute from "./user.route.js";
import newsletterRoute from "./newsletter_route.js";
import paymentRoute from "./payment_route.js";
import cartRoute from "./cart.route.js";
import orderRoute from "./order.route.js";
import orderEmail from "../nodemailer/orderEmail.js";
import addressRoute from "./address.route.js";

const router = Router();

router.use("/search", searchProductRoute);
router.use("/products", productsRoute);
router.use("/ocr", ocrRoute);
router.use("/auth", userRoute);
router.use("/newsletter", newsletterRoute);
router.use("/payment", paymentRoute);
router.use("/order", orderRoute);
router.use("/order-email", orderEmail);
router.use("/cart", cartRoute);
router.use("/address", addressRoute);

export default router;

import { Router } from "express";
const router = Router();

import customers from "./customer.routes.js";
import products from "./product.routes.js";

router.use("/customers", customers);
router.use("/products", products);
export default router;

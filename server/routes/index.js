import { Router } from "express";
const router = Router();

import customers from "./customer.routes.js";

router.use("/customers", customers);
export default router;

import { Router } from "express";
import ProductController from "../controllers/Product.controller.js";
const router = Router();

router
	.get("/", ProductController.find)
	.get("/count", ProductController.count)
	.get("/:id", ProductController.findById)
	.post("/", ProductController.create)
	.put("/:id", ProductController.update)
	.delete("/:id", ProductController.deleteOne);

export default router;

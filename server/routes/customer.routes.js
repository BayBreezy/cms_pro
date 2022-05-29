import { Router } from "express";
import CustomerController from "../controllers/Customer.controller.js";
const router = Router();

router
  .get("/", CustomerController.find)
  .get("/count", CustomerController.count)
  .get("/:id", CustomerController.findById)
  .post("/", CustomerController.create)
  .put("/:id", CustomerController.update)
  .delete("/:id", CustomerController.deleteOne);

export default router;

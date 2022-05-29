import CustomerService from "../services/Customer.service.js";
import { CustomerValidator } from "../utils/validators.js";

export default {
  count: async (req, res, next) => {
    try {
      const count = await CustomerService.count(req.query);
      res.status(200).json({ count });
    } catch (error) {
      next(error);
    }
  },
  find: async (req, res, next) => {
    try {
      const customers = await CustomerService.find(req.query);
      res.status(200).json(customers);
    } catch (error) {
      next(error);
    }
  },
  findOne: async (req, res, next) => {
    try {
      const customer = await CustomerService.findOne(req.query);
      res.status(200).json(customer);
    } catch (error) {
      next(error);
    }
  },
  findById: async (req, res, next) => {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ message: "Missing id" });
      const customer = await CustomerService.findById(req.params.id);
      res.status(200).json(customer);
    } catch (error) {
      next(error);
    }
  },
  create: async (req, res, next) => {
    try {
      await CustomerValidator.validateAsync(req.body, {
        allowUnknown: true,
        abortEarly: true,
      });
      const customer = await CustomerService.create(req.body);
      res.status(201).json(customer);
    } catch (error) {
      next(error);
    }
  },
  update: async (req, res, next) => {
    try {
      await CustomerValidator.validateAsync(req.body, {
        allowUnknown: true,
        abortEarly: true,
      });
      const { id } = req.params;
      if (!id) return res.status(400).json({ message: "Missing id" });
      // check if the email is already in use
      const customerExist = await CustomerService.findOne({
        email: req.body.email.toLowerCase(),
        _id: { $ne: id },
      });
      if (customerExist) {
        return res.status(400).json({ message: "Email already in use" });
      }
      const customer = await CustomerService.update(id, req.body);
      res.status(200).json(customer);
    } catch (error) {
      next(error);
    }
  },
  deleteOne: async (req, res, next) => {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ message: "Missing id" });
      await CustomerService.deleteOne(id);
      res.status(200).json({ message: "Customer deleted" });
    } catch (error) {
      next(error);
    }
  },
};

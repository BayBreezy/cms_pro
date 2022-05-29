import ProductService from "../services/Product.service.js";
import { ProductValidator } from "../utils/validators.js";

export default {
	count: async (req, res, next) => {
		try {
			const count = await ProductService.count(req.query);
			res.status(200).json({ count });
		} catch (error) {
			next(error);
		}
	},
	find: async (req, res, next) => {
		try {
			const products = await ProductService.find(req.query);
			res.status(200).json(products);
		} catch (error) {
			next(error);
		}
	},
	findOne: async (req, res, next) => {
		try {
			const products = await ProductService.findOne(req.query);
			res.status(200).json(products);
		} catch (error) {
			next(error);
		}
	},
	findById: async (req, res, next) => {
		try {
			const { id } = req.params;
			if (!id) return res.status(400).json({ message: "Missing id" });
			const product = await ProductService.findById(req.params.id);
			res.status(200).json(product);
		} catch (error) {
			next(error);
		}
	},
	create: async (req, res, next) => {
		try {
			await ProductValidator.validateAsync(req.body, {
				allowUnknown: true,
				abortEarly: true,
			});
			const product = await ProductService.create(req.body);
			res.status(201).json(product);
		} catch (error) {
			next(error);
		}
	},
	update: async (req, res, next) => {
		try {
			await ProductValidator.validateAsync(req.body, {
				allowUnknown: true,
				abortEarly: true,
			});
			const { id } = req.params;
			if (!id) return res.status(400).json({ message: "Missing id" });
			const product = await ProductService.update(id, req.body);
			res.status(200).json(product);
		} catch (error) {
			next(error);
		}
	},
	deleteOne: async (req, res, next) => {
		try {
			const { id } = req.params;
			if (!id) return res.status(400).json({ message: "Missing id" });
			await ProductService.deleteOne(id);
			res.status(200).json({ message: "Product deleted" });
		} catch (error) {
			next(error);
		}
	},
};

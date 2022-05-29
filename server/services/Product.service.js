import Product from "../models/Product.model.js";

export default {
	count: async (obj) => await Product.estimatedDocumentCount(obj),
	findOne: async (obj) => await Product.findOne(obj),
	find: async (obj) => await Product.find(obj),
	findById: async (id) => await Product.findById(id),
	create: async (obj) => await Product.create(obj),
	update: async (id, obj) =>
		await Product.findByIdAndUpdate(id, obj, { new: true }),
	deleteOne: async (id) => await Product.findByIdAndDelete(id),
};

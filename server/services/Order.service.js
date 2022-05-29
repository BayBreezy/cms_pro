import Order from "../models/Order.model.js";

export default {
	count: async (obj) => await Order.estimatedDocumentCount(obj),
	findOne: async (obj) => await Order.findOne(obj),
	find: async (obj) => await Order.find(obj),
	findById: async (id) => await Order.findById(id),
	create: async (obj) => await Order.create(obj),
	update: async (id, obj) =>
		await Order.findByIdAndUpdate(id, obj, { new: true }),
	deleteOne: async (id) => await Order.findByIdAndDelete(id),
};

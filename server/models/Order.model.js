import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema(
	{
		product: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Product",
			required: true,
		},
		quantity: {
			type: Number,
			required: true,
		},
	},
	{ timestamps: true }
);

const schema = new mongoose.Schema(
	{
		orderDate: {
			type: Date,
			default: Date.now,
		},
		delivered: {
			type: Boolean,
			default: false,
		},
		shipped: {
			type: Boolean,
			default: false,
		},
		customer: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Customer",
			required: true,
		},
		orderItems: [orderItemSchema],
		orderTotal: {
			type: Number,
			required: true,
		},
	},
	{ timestamps: true }
);

const Order = mongoose.model("Order", schema);
export default Order;

import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
	url: String,
	public_id: String,
	format: String,
	secure_url: String,
	bytes: Number,
	resource_type: String,
});

const categorySchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
	},
});

const schema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Product name is required"],
		},
		price: {
			type: Number,
			required: true,
			min: [0, "Price must be greater than 0"],
		},
		description: String,
		quantity: {
			type: Number,
			default: 1,
		},
		tags: [String],
		images: [imageSchema],
		categories: [categorySchema],
	},
	{ timestamps: true }
);

const Product = mongoose.model("Product", schema);
export default Product;

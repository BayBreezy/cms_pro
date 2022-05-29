import joi from "joi";

export const CustomerValidator = joi.object({
	name: joi.string().required(),
	email: joi.string().email().required(),
	phone: joi.string().allow(null).allow(""),
	gender: joi.string().allow(null).allow(""),
	street: joi.string().allow(null).allow(""),
	street2: joi.string().allow(null).allow(""),
	city: joi.string().allow(null).allow(""),
	country: joi.string().allow(null).allow(""),
});

export const ProductValidator = joi.object({
	name: joi.string().required(),
	price: joi.string().required(),
	quantity: joi.string().allow(null).allow(""),
	description: joi.string().allow(null).allow(""),
	tags: joi.array(),
});

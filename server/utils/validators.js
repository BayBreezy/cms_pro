import joi from "joi";

export const CustomerValidator = joi.object({
  name: joi.string().required(),
  email: joi.string().email().required(),
  phone: joi.string(),
  gender: joi.string(),
  street: joi.string(),
  street2: joi.string(),
  city: joi.string(),
  country: joi.string(),
});

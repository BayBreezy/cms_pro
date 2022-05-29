import Customer from "../models/Customer.model.js";

export default {
  count: async (obj) => await Customer.estimatedDocumentCount(obj),
  findOne: async (obj) => await Customer.findOne(obj),
  find: async (obj) => await Customer.find(obj),
  findById: async (id) => await Customer.findById(id),
  create: async (obj) => await Customer.create(obj),
  update: async (id, obj) => await Customer.findByIdAndUpdate(id, obj, { new: true }),
  deleteOne: async (id) => await Customer.findByIdAndDelete(id),
};

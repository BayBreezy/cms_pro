import mongoose from "mongoose";

const schma = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
    },
    phone: String,
    gender: String,
    street: String,
    street2: String,
    city: String,
    country: String,
  },
  { timestamps: true }
);

// pre middleware that check if the email is already in use
schma.pre("save", function () {
  const { email } = this;
  return new Promise(async (res, rej) => {
    const customer = await Customer.findOne({ email: email.toLowerCase() });
    if (customer) {
      rej(new Error("Email already in use"));
    } else {
      res();
    }
  });
});

const Customer = mongoose.model("Customer", schma);
export default Customer;

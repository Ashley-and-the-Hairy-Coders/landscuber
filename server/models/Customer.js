import mongoose from "mongoose";
import RatingSchema from "./Rating"
const Schema = mongoose.Schema;

const Customer = new Schema(
  {
    subs: [{ type: String, unique: true }],
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, lowercase: true, unique: true },
    // We need to figure out how we are converting/storing location data below
    location: { type: Number, required: true },
    picture: { type: String },
    phone: { type: Number },
    ratings: [RatingSchema],
    billingInfo: { type: String, default: "Billing Info will be stored here" }

    // NOTE If you wish to add additional public properties for profiles do so here
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Customer;

import mongoose from "mongoose";
import RatingSchema from "./Rating"
const Schema = mongoose.Schema;

const Provider = new Schema(
  {
    subs: [{ type: String, unique: true }],
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, lowercase: true, unique: true },
    // We need to figure out how we are converting/storing location data below
    location: { type: Number, required: true },
    picture: { type: String, required: true },
    phone: { type: Number, required: true },
    paymentInfo: { type: String, default: "Billing Info will be stored here" },
    availableNow: { type: Boolean, default: false },
    ratings: [RatingSchema],
    services: [{ type: String }]



    // NOTE If you wish to add additional public properties for profiles do so here
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Provider;

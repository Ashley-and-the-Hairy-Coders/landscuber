import mongoose from "mongoose";
import RatingSchema from "./Rating"
const Schema = mongoose.Schema;

let addressSchema = new Schema(
  {
    primary: { type: Boolean, default: false },
    streetAddress: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zipCode: { type: Number, required: true },
    nickname: { type: String },
    yardSize: { type: String, required: true, enum: ["Small", "Medium", "Large", "X-Large"] }
  }
)

const Customer = new Schema(
  {
    // We need to figure out how we are converting/storing location data below
    location: { type: Number, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    picture: { type: String, default: "https://cdn.pixabay.com/photo/2016/08/31/11/54/user-1633249_960_720.png" },
    phone: { type: Number },
    billingInfo: { type: String, default: "Billing Info will be stored here" },
    addresses: [addressSchema],
    ratings: [RatingSchema],

  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Customer;
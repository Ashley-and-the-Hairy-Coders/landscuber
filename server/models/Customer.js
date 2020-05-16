import mongoose from "mongoose";
const Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;

// NOTE FYI - addressSchema is a sub-doc of Customer
let addressSchema = new Schema({
  primary: { type: Boolean, default: false },
  streetAddress: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zipCode: { type: Number, required: true },
  nickname: { type: String },
  contactName: { type: String },
  yardSize: {
    type: String,
    required: true,
    enum: ["Small", "Medium", "Large", "X-Large"],
  },
});

const Customer = new Schema(
  {
    // We need to figure out how we are converting/storing location data below
    location: { type: String, maxlength: 5, minlength: 5, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    customerEmail: { type: String, },
    profileId: { type: ObjectId, ref: "Profile" },
    picture: {
      type: String,
      default:
        "https://cdn.pixabay.com/photo/2016/08/31/11/54/user-1633249_960_720.png",
    },
    cellPhone: { type: String },
    primaryPhone: { type: String },
    billingInfo: { type: String, default: "Billing Info will be stored here" },
    addresses: [addressSchema],
    // ratings: [RatingSchema],
  },

  { timestamps: true, toJSON: { virtuals: true } }
);
Customer.virtual("customer", {
  localField: "customerEmail",
  ref: "Profile",
  foreignField: "email",
  justOne: true,
});

export default Customer;

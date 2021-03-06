import mongoose from "mongoose";
const Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId

let ratingSchema = new Schema(
  {
    jobId: { type: String },
    providerId: { type: ObjectId, ref: "Provider" },
    providerRating: { type: Number }
  }
)

const Provider = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    providerEmail: { type: String, },
    // We need to figure out how we are converting/storing location data below
    // For now this is just a string with a max length of 5 so we can test signups
    location: { type: String, required: true, minlength: 5, maxlength: 5 },
    picture: {
      type: String, default:
        "https://cdn.pixabay.com/photo/2016/08/31/11/54/user-1633249_960_720.png",
    },
    phone: { type: String, required: true },
    paymentInfo: { type: String, default: "Billing Info will be stored here" },
    availableNow: { type: Boolean, default: false },
    ratings: [ratingSchema],
    services: [{ type: String }]

  },
  { timestamps: true, toJSON: { virtuals: true } }
)
Provider.virtual("provider", {
  localField: "providerEmail",
  ref: "Profile",
  foreignField: "email",
  justOne: true,
});

export default Provider;

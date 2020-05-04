import mongoose from "mongoose";
const Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId

const Profile = new Schema(
  {
    subs: [{ type: String, unique: true }],
    email: { type: String, lowercase: true, unique: true },
    name: { type: String, required: true },
    picture: { type: String },
    // NOTE If you wish to add additional public properties for profiles do so here
    // TODO Need to restrict these so profile can only have ONE customer and provider profile.
    customerProfile: { type: ObjectId, ref: "Customer" },
    providerProfile: { type: ObjectId, ref: "Provider" }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Profile;

import mongoose from "mongoose";
const Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId

const Profile = new Schema(
  {
    subs: [{ type: String, unique: true }],
    email: { type: String, lowercase: true },
    name: { type: String, required: true },
    picture: { type: String },
    // NOTE If you wish to add additional public properties for profiles do so here
    customerProfile: { type: ObjectId, ref: "Customer", default: {} },
    providerProfile: { type: ObjectId, ref: "Provider", default: {} }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Profile;

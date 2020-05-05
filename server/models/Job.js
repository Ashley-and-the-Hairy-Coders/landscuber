import mongoose from "mongoose";
const Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId

// NOTE we will be creating a sub-doc here for Messages so the Provider and Customer can communicate.
let messageSchema = new Schema({
  body: { type: String, required: true },
  providerId: { type: ObjectId, ref: "Provider" },
  providerImg: { type: String, },
  customerId: { type: ObjectId, ref: "Customer" },
  customerImg: { type: String }
})

const Job = new Schema(
  {
    customerId: { type: ObjectId, ref: "Customer", required: true },
    providerId: { type: ObjectId, ref: "Provider", },
    //NOTE Job contactName will essentially import contactName from addressSchema sub-doc in Customer Schema
    contactName: { type: String, },
    streetAddress: { type: String, },
    city: { type: String, },
    state: { type: String, },
    zipCode: { type: Number, },
    yardSize: {
      type: String,
      required: true,
      enum: ["small", "medium", "large", "x-large"],
    },
    price: { type: Number, },
    timeWindow: { type: String },
    confirmedTime: { type: String },
    jobNote: { type: String },
    jobStatus: { type: String, enum: ["posted", "accepted", "scheduled", "active", "completed"], default: "posted" }, // NOTE Can only delete a job if it has a status of "Posted"
    messages: [messageSchema]
  }
)

export default Job

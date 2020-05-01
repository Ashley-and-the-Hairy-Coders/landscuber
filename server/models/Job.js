import mongoose from "mongoose";
const Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId

// NOTE we will be creating a sub-doc here for Messages so the Provider and Customer can communicate.

// REVIEW Do we want to only have customerId and providerId at the start to make sure we can get them linked up? 
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
      enum: ["Small", "Medium", "Large", "X-Large"],
    },
    price: { type: Number, },
    timeWindow: { type: String },
    confirmedTime: { type: String },
    jobNote: { type: String },
    jobStatus: { type: String, enum: ["Posted", "Accepted", "Active", "Completed"] } // NOTE Can only delete a job if it has a status of "Posted"
  }
)

export default Job

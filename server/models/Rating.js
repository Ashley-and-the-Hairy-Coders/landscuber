import mongoose from "mongoose"
const Schema = mongoose.Schema

const Rating = new Schema(
  {
    value: { type: Number, min: 1, max: 5 },
  }
)

export default Rating
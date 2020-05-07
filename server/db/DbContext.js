import mongoose from "mongoose";
import ValueSchema from "../models/Value";
import ProfileSchema from "../models/Profile"
import CustomerSchema from "../models/Customer";
import ProviderSchema from "../models/Provider";
import RatingSchema from "../models/Rating";
import JobSchema from "../models/Job"

class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Profile = mongoose.model("Profile", ProfileSchema);
  Customer = mongoose.model("Customer", CustomerSchema);
  Provider = mongoose.model("Provider", ProviderSchema);

  Rating = mongoose.model("Rating", RatingSchema);
  Job = mongoose.model("Job", JobSchema)
}

export const dbContext = new DbContext();

import mongoose from "mongoose";
import ValueSchema from "../models/Value";
import ProfileSchema from "../models/Profile"
import CustomerSchema from "../models/Customer";
import ProviderSchema from "../models/Provider";
import RatingSchema from "../models/Rating";

class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Profile = mongoose.model('Profile', ProfileSchema)
  Customer = mongoose.model("Customer", CustomerSchema);
  Provider = mongoose.model("Provider", ProviderSchema);
  Rating = mongoose.model("Rating", RatingSchema);
}

export const dbContext = new DbContext();

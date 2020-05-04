import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class CustomersService {
  //SECTION Get requests
  async getAllCustomers() {
    return await dbContext.Customer.find();
  }
  async getCustomerById(customerId) {
    let customer = await dbContext.Customer.findById(customerId);
    if (!customer) {
      throw new BadRequest("Invalid Customer Id");
    }
    return customer;
  }

  //!SECTION
  //SECTION Create requests
  async createCustomer(rawData) {
    let data = await dbContext.Customer.create(rawData);
    return data;
  }
  async createAddress(customerId, rawData) {
    let addressData = await dbContext.Customer.findOneAndUpdate(
      { _id: customerId },
      { $addToSet: { addresses: rawData } },
      { new: true }
    );
    return addressData;
  }

  //!SECTION
  //SECTION Edit requests
  async editCustomer(customerId, email, rawData) {
    let customerData = await dbContext.Customer.findOneAndUpdate(
      { _id: customerId, customerEmail: email },
      rawData,
      { new: true }
    );
    if (!customerData) {
      throw new BadRequest("Invalid id or you are not this customer!");
    }
    return customerData;
  }
  async editAddress(customerId, addressId, email, rawData) {
    let addressData = await dbContext.Customer.findOneAndUpdate(
      { _id: customerId, customerEmail: email, "addresses._id": addressId },
      { $set: { "addresses.$": rawData } },
      // NOTE the following below will update just the city on the address sub-doc
      // { $set: { "addresses.$.city": rawData.city } },
      // if this doesn't work, ask D$ more questions
      { new: true, runValidators: true, context: "query" }
    );
    return addressData;
  }
  //!SECTION
  //SECTION Delete requests

  async deleteCustomer(customerId, userEmail) {
    let data = await dbContext.Customer.findOneAndRemove({ _id: customerId, creatorEmail: userEmail })
    if (!data) {
      throw new BadRequest("Invalid ID or this is not your account!")
    }
  }

  async deleteAddress(customerId, addressId, userEmail) {
    let data = await dbContext.Customer.findOneAndUpdate(
      { _id: customerId, customerEmail: userEmail },
      { $pull: { addresses: { _id: addressId } } },
      { new: true }
    )
    return data
  }
  //!SECTION
}

export const customersService = new CustomersService();

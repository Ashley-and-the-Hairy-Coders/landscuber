import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class CustomersService {

  //SECTION Get requests
  async getAllCustomers() {
    return await dbContext.Customer.find()
  }
  async getCustomerById(customerId) { //  TODO FINISH ME
    let customer = await dbContext.Customer.findById(customerId);
    if (!customer) {
      throw new BadRequest("Invalid Customer Id");
    }
    return customer;
  }
  //TODO Do we need any more get requests?
  //!SECTION
  //SECTION Create requests
  async createCustomer(rawData) {
    let data = await dbContext.Customer.create(rawData)
    return data
  }
  //TODO Figure out how to createAddress (voodoomagic?!)
  //!SECTION
  //SECTION Edit requests
  //TODO Finish edit requests
  //!SECTION
  //SECTION Delete requests
  //TODO Finish delete requests
  //!SECTION
}


export const customersService = new CustomersService();

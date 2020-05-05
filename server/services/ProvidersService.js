import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class ProvidersService {

  //SECTION Get requests

  async getAllProviders() {
    return await dbContext.Provider.find();
  }
  async getProviderById(providerId) {
    let provider = await dbContext.Provider.findById(providerId);
    if (!provider) {
      throw new BadRequest("Invalid Provider Id");
    }
    return provider;
  }
  async getProviderByEmail(user) {
    let provider = await dbContext.Provider.findOne(
      { providerEmail: user.email }
    ).populate("providerEmail")
    return provider;
  }
  //!SECTION
  //SECTION Create requests
  async createProvider(rawData) {
    let data = await dbContext.Provider.create(rawData);
    return data;
  }
  //!SECTION
  //SECTION Edit requests


  async editProvider(providerId, rawData) {
    let providerData = await dbContext.Provider.findOneAndUpdate(
      { _id: providerId },
      rawData,
      { new: true }
    );
    if (!providerData) {
      throw new BadRequest("Invalid id or you are not this provider!");
    }
    return providerData;
  }
  //!SECTION
  //SECTION Delete requests
  async deleteProvider(providerId, userEmail) {
    let data = await dbContext.Provider.findOneAndRemove({ _id: providerId, creatorEmail: userEmail })
    if (!data) {
      throw new BadRequest("Invalid ID or this is not your account!")
    }
  }
  //!SECTION
}

export const providersService = new ProvidersService();
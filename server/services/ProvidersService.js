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
    ).populate("provider")
    return provider;
  }
  //!SECTION
  //SECTION Create requests
  async createProvider(rawData) {
    let data = await dbContext.Provider.create(rawData);
    return data;
  }

  async createRating(providerId, rawData) {
    let newArr = []
    let ratingsData = null;
    let provider = await dbContext.Provider.findOne(
      { _id: providerId }
    );
    // @ts-ignore
    provider.ratings.forEach(r => {
      newArr.push(r.jobId)
    })
    if (newArr.includes(rawData.jobId)) {
      throw new BadRequest("You can't do that ding dong!")
    }
    else {
      ratingsData = dbContext.Provider.findOneAndUpdate(
        // If there is already a rating in the provider's ratings array that matches incoming jobId we need to kick this back. 
        { _id: providerId },
        { $addToSet: { ratings: { providerRating: rawData.providerRating, jobId: rawData.jobId, providerId: rawData.providerId } } },
        { new: true }
      );
      return ratingsData;
    }
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
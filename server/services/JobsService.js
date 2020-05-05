import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class JobsService {
  //SECTION Get requests
  async getAllJobs() {
    let jobData = await dbContext.Job.find()
    return jobData;
  }
  async getJobsByCustomerId(customerId) {
    let jobData = await dbContext.Job.find({ customerId: customerId })
    if (!jobData) {
      throw new BadRequest("Incorrect customer ID or no job history")
    }
    return jobData
  }

  async getJobsByStatus(status) {
    let jobData = await dbContext.Job.find({ jobStatus: status })
    if (!jobData) {
      throw new BadRequest("There are no active jobs at this time!")
    }
    return jobData
  }
  async getJobById(jobId) {
    let job = await dbContext.Job.findById(jobId);
    if (!job) {
      throw new BadRequest("Invalid Job Id");
    }
    return job;
  }
  async getJobsByProviderId(providerId) {
    let jobData = await dbContext.Job.find({ providerId: providerId })
    if (!jobData) {
      throw new BadRequest("Incorrect provider ID or no job history")
    }
    return jobData
  }
  //!SECTION
  //SECTION Create requests
  async createJob(rawData) {
    delete rawData._id
    let data = await dbContext.Job.create(rawData)
    return data;
  }
  async createMessage(jobId, rawData) {
    delete rawData._id;
    let messageData = await dbContext.Job.findOneAndUpdate(
      { _id: jobId },
      { $addToSet: { messages: rawData } },
      { new: true }
    );
    return messageData;
  }
  //!SECTION
  //SECTION Edit requests
  async editJob(jobId, rawData) {
    let jobData = await dbContext.Job.findOneAndUpdate(
      { _id: jobId },
      rawData,
      { new: true }
    )
    if (!jobData) {
      throw new BadRequest("Invalid job ID or you did not create this job!");
    }
    return jobData;
  }
  //!SECTION
  //SECTION Delete requests
  //NOTE customerId is the ID of the customer who sent the delete request
  async deleteJob(jobId, customerId) {
    let data = await dbContext.Job.findOneAndRemove({ _id: jobId, customerId: customerId })
    if (!data) {
      throw new BadRequest("Invalid ID or this is not your account!")
    }
  }
  //!SECTION
}

export const jobsService = new JobsService();
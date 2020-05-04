import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class JobsService {
  //SECTION Get requests
  async getAllJobs() {
    let data = await dbContext.Job.find()
    return data;
  }
  //!SECTION
  //SECTION Create requests
  async createJob(rawData) {
    let data = await dbContext.Job.create(rawData)
    return data;
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
  //!SECTION
}

export const jobsService = new JobsService();
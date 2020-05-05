import express from "express";
import BaseController from "../utils/BaseController";
import { jobsService } from "../services/JobsService";
import auth0Provider from "@bcwdev/auth0provider";
import { customersService } from '../services/CustomersService';
import { providersService } from '../services/ProvidersService';

export class JobsController extends BaseController {
  constructor() {
    super("api/jobs");
    this.router
      // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .use(auth0Provider.getAuthorizedUserInfo)
      // NOTE Will we want to filter jobs by status on the back end at some point so we aren't pulling in as much data?
      .get("", this.getAllJobs) // Query isActive
      .get("/:id", this.getJobById)
      .post("", this.createJob)
      .post("/:jobId/messages", this.createMessage)
      // NOTE The route below allows the customer to edit their job posting and also allows the provider to accept a job via an acceptJob query.
      .put("/:id", this.editJob)
      // We will probably need more routes for when Providers or Customers cancel jobs after they have been accepted
      .delete("/:id", this.deleteJob)

  }
  //SECTION Get requests
  async getAllJobs(req, res, next) {
    if (req.query.status) {
      let activeJobData = await jobsService.getJobsByStatus(req.query.status)
      return res.send(activeJobData)
    }
    try {
      let jobData = await jobsService.getAllJobs();
      return res.send(jobData);
    } catch (error) {
      next(error);
    }
  }
  async getJobById(req, res, next) {
    try {
      let data = await jobsService.getJobById(req.params.id);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  //!SECTION
  //SECTION Post requests

  async createJob(req, res, next) {
    try {
      let data = await jobsService.createJob(req.body);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async createMessage(req, res, next) {
    try {
      if (req.query.creator == "provider") {
        let provider = await providersService.getProviderByEmail(req.userInfo)
        req.body.providerId = provider.id
        // @ts-ignore
        req.body.providerImg = provider.picture
      }
      if (req.query.creator == "customer") {
        let customer = await customersService.getCustomerByEmail(req.userInfo)
        req.body.customerId = customer.id
        // @ts-ignore
        req.body.customerImg = customer.picture
      }
      let data = await jobsService.createMessage(req.params.jobId, req.body)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }

  //!SECTION
  //SECTION Put requests


  async editJob(req, res, next) {
    try {
      // NOTE We need to revisit this and find out how to send the acceptJob query from the front end. Cannot test it via postman because we do not have any userInfo to work with.
      // Will it looks like this? ---> await api.put(`job/jobId?acceptJob`, jobData)
      if (req.query.acceptJob) {
        let provider = await providersService.getProviderByEmail(req.userInfo)
        req.body.providerId = provider.id
        // Null check? If no provider data exists, let front end know?
      }
      let data = await jobsService.editJob(
        req.params.id,
        req.body
      );
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }


  //!SECTION
  //SECTION Delete requests
  async deleteJob(req, res, next) {
    //NOTE We will need to send the ID of the customer that called the delete request in from the store.
    try {
      let data = await jobsService.deleteJob(
        req.params.id,
        req.params.customerId
      );
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  //!SECTION
}
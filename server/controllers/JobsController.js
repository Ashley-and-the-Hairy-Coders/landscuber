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
      .get("", this.getAllJobs)
      .get("/:id", this.getJobById)
      .post("", this.createJob)
      // NOTE The route below allows the customer to edit their job posting and also allows the provider to accept a job via an acceptJob query.
      .put("/:id", this.editJob)
      // We will probably need more routes for when Providers or Customers cancel jobs after they have been accepted
      .delete("/:id", this.deleteJob)

  }
  //SECTION Get requests
  async getAllJobs(req, res, next) {
    try {
      let data = await jobsService.getAllJobs();
      return res.send(data);
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

  //!SECTION
  //SECTION Put requests



  async editJob(req, res, next) {
    try {
      // NOTE We need to revisit this and find out how to send the acceptJob query from the front end. Cannot test it via postman because we do not have any userInfo to work with.
      // Will it looks like this? ---> await api.put(`job/jobId?=acceptJob`, jobData)
      // NOTE If 
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
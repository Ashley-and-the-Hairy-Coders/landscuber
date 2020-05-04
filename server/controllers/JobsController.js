import express from "express";
import BaseController from "../utils/BaseController";
import { jobsService } from "../services/JobsService";
import auth0Provider from "@bcwdev/auth0provider";
import { customersService } from '../services/CustomersService';

export class JobsController extends BaseController {
  constructor() {
    super("api/jobs");
    this.router
      // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .use(auth0Provider.getAuthorizedUserInfo)
      .get("", this.getAllJobs)
      .get("/:id", this.getJobById)
      .post("", this.createJob)
      .put("/:id", this.editJob)
    // .put("/:id", this.acceptJob)
    // We will probably need more routes for when Providers or Customers cancel jobs after they have been accepted
    // .delete("/:id", this.deleteJob)

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
      // let data = await jobsService.getJobById(req.params.id);
      // return res.send(data);
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
  //!SECTION
}
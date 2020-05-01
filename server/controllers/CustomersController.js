import express from "express";
import BaseController from "../utils/BaseController";
import { customersService } from "../services/CustomersService";
import auth0Provider from "@bcwdev/auth0provider";

export class CustomersController extends BaseController {
  constructor() {
    super("api/customers");
    this.router
      // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .use(auth0Provider.getAuthorizedUserInfo)
      .get("", this.getAllCustomers)
      .get("/:id", this.getCustomerById)
      .get("/:id/jobs", this.getJobsByCustomerId)
      .get("/:id/ratings", this.getRatingsByCustomerId)
      .post("", this.createCustomer)
      .post("/:id/addresses", this.createAddress)
      .put("/:id", this.editCustomer)
      .put("/:customerId/addresses/:addressId", this.editAddress)
      .delete("/:id", this.deleteCustomer)
      .delete("/:customerId/addresses/:addressId", this.deleteAddress);
  }
  //SECTION Get requests
  async getAllCustomers(req, res, next) {
    try {
      let data = await customersService.getAllCustomers();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async getCustomerById(req, res, next) {
    try {
      let data = await customersService.getCustomerById(req.params.id);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async getJobsByCustomerId(req, res, next) {
    try {
      let data = await customersService.getJobsByCustomerId(req.params.id);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  // NOTE The below function will target the Ratings service and pull back an array of ratings tied to the specific customer ID we are passing in
  async getRatingsByCustomerId(req, res, next) {
    try {
      let data = await ratingsService.getRatingsByCustomerId(req.params.id);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  //!SECTION
  //SECTION Post requests
  async createCustomer(req, res, next) {
    try {
      req.body.customerEmail = req.user.email;
      let data = await customersService.createCustomer(req.body);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async createAddress(req, res, next) {
    try {
      req.body.customerEmail = req.user.email;
      let data = await customersService.createAddress(req.params.id, req.body);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  //TODO Do we need anything else here?
  //!SECTION
  //SECTION Put requests
  async editCustomer(req, res, next) {
    try {
      let data = await customersService.editCustomer(
        req.params.id,
        req.userInfo.email,
        req.body
      );
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async editAddress(req, res, next) {
    try {
      let data = await customersService.editAddress(
        req.params.customerId,
        req.params.addressId,
        req.body,
        req.userInfo.email
      );
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  //!SECTION
  //SECTION Delete requests
  async deleteCustomer(req, res, next) {
    try {
      let data = await customersService.deleteCustomer(
        req.params.id,
        req.userInfo.email
      );
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async deleteAddress(req, res, next) {
    try {
      await customersService.deleteAddress(
        req.params.customerId,
        req.params.addressId,
        req.userInfo.email
      );
      return res.send("Address Deleted");
    } catch (error) {
      next(error);
    }
  }
  //!SECTION
}

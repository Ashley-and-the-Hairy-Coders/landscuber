import express from "express";
import BaseController from "../utils/BaseController";
import { providersService } from "../services/ProvidersService";
import auth0Provider from "@bcwdev/auth0provider";

export class ProvidersController extends BaseController {
  constructor() {
    super("api/providers");
    this.router
      // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .use(auth0Provider.getAuthorizedUserInfo)
      .get("", this.getAllProviders)
      .get("/:id", this.getProviderById)
      .post("", this.createProvider)
      .put("/:id", this.editProvider)
      .delete("/:id", this.deleteProvider)
  }
  //SECTION Get requests
  async getAllProviders(req, res, next) {
    try {
      let data = await providersService.getAllProviders();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async getProviderById(req, res, next) {
    try {
      let data = await providersService.getProviderById(req.params.id);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  //!SECTION
  //SECTION Post requests


  async createProvider(req, res, next) {
    try {
      req.body.providerEmail = req.user.email;
      let data = await providersService.createProvider(req.body);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  //!SECTION
  //SECTION Put requests
  async editProvider(req, res, next) {
    try {
      let data = await providersService.editProvider(
        req.params.id,
        req.userInfo.email,
        req.body
      );
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  //!SECTION
  //SECTION Delete requests
  async deleteProvider(req, res, next) {
    try {
      let data = await providersService.deleteProvider(
        req.params.id,
        req.userInfo.email
      );
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  //!SECTION
}
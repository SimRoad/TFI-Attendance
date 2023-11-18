import { Router } from "express";
import AddressController from "../controller/address.controller.js";

const addressRouter = Router()

addressRouter.get('/all',AddressController.getAll)
addressRouter.get('/fields',AddressController.getFieldNames)

export default addressRouter


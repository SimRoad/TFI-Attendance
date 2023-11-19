import { Router } from "express";
import AddressController from "../controller/address.controller.js";

const addressRouter = Router()

addressRouter.get('/id',AddressController.findByID)
addressRouter.get('/all',AddressController.findAll)
addressRouter.get('/fields',AddressController.getFieldNames)
addressRouter.patch('/update',AddressController.update)

export default addressRouter


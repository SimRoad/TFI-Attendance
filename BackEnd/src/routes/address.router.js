import { Router } from "express";
import AddressController from "../controller/address.controller.js";

const addressRouter = Router()

addressRouter.get('/id',await AddressController.findByID)
addressRouter.get('/all',await AddressController.findAll)
addressRouter.get('/:id',AddressController.findByID)
addressRouter.get('/fields',await AddressController.getFieldNames)
addressRouter.patch('/update',await AddressController.update)

export default addressRouter


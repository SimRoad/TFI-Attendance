import { Router } from "express";
import AddressController from "../controller/address.controller.js";

const addressRouter = Router()

addressRouter.get('/all',await AddressController.findAll)
addressRouter.get('/fields',await AddressController.getFieldNames)
addressRouter.get('/:id',await AddressController.findByID)
addressRouter.post('/create',AddressController.create)
addressRouter.patch('/update',await AddressController.update)

export default addressRouter


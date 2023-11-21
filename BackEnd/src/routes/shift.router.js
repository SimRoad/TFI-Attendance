import ShiftController from "../controller/shift.controller.js";
import { Router } from "express";

const shiftRouter = Router()

shiftRouter.get('/all',ShiftController.findAll)
shiftRouter.get('/fields',ShiftController.getFieldNames)
shiftRouter.post('/create',ShiftController.create)
shiftRouter.patch('/update',ShiftController.update)

export default shiftRouter
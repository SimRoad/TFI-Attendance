import ShiftController from "../controller/shift.controller.js";
import { Router } from "express";

const shiftRouter = Router()

shiftRouter.get('/all',ShiftController.getAll)
shiftRouter.get('/fields',ShiftController.getFieldNames)
shiftRouter.post('/create',ShiftController.create)

export default shiftRouter
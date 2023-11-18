import ShiftController from "../controller/shift.controller.js";
import { Router } from "express";

const shiftRouter = Router()

shiftRouter.get('/all',ShiftController.getAll)
shiftRouter.get('/fields',ShiftController.getFieldNames)

export default shiftRouter
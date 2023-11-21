import { Router } from "express";
import ReasonController from "../controller/reason.controller.js";

const reasonRouter = Router()

reasonRouter.get('/all',ReasonController.getAll)
reasonRouter.get('/fields',ReasonController.getFieldNames)
reasonRouter.post('/create',ReasonController.create)
reasonRouter.patch('/update',ReasonController.update)

export default reasonRouter
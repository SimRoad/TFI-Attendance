import { Router } from "express";
import ReasonController from "../controller/reason.controller.js";

const reasonRouter = Router()

reasonRouter.get('/all',ReasonController.getAll)
reasonRouter.get('/fields',ReasonController.getFieldNames)

export default reasonRouter
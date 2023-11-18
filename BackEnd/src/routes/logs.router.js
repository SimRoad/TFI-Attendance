import { Router } from "express";
import LogsController from "../controller/logs.controller.js";

const logsRouter = Router()

logsRouter.get('/all',LogsController.getAll)
logsRouter.get('/fields',LogsController.getFieldNames)

export default logsRouter
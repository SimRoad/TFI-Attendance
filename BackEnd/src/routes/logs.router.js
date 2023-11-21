import { Router } from "express";
import LogsController from "../controller/logs.controller.js";
import Logs from "../models/Logs.model.js";

const logsRouter = Router()

logsRouter.get('/all',LogsController.findAll)
logsRouter.get('/fields',LogsController.getFieldNames)
logsRouter.post('/create',LogsController.create)
logsRouter.patch('/update',LogsController.update)


export default logsRouter
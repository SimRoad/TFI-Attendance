import LeavesController from "../controller/leaves.controller.js";
import { Router } from "express";

const leavesRouter= Router()

leavesRouter.get('/all',LeavesController.getAll)
leavesRouter.get('/fields',LeavesController.getFieldNames)

export default leavesRouter
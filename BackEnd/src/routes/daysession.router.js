import DaySessionController from "../controller/daysession.controller.js";
import { Router } from "express";

const daySessionRouter = Router();

daySessionRouter.get(`/all`, DaySessionController.getAll)
daySessionRouter.get(`/fields`,DaySessionController.getColumnFields)

export default daySessionRouter
import { Router } from "express";
import HolidaysController from "../controller/holidays.controller.js";

const holidaysRouter = Router();

holidaysRouter.get('/all',HolidaysController.getAll)
holidaysRouter.get('/fields', HolidaysController.getFieldNames)

export default holidaysRouter
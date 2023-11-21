import { Router } from "express";
import HolidaysController from "../controller/holidays.controller.js";

const holidaysRouter = Router();

holidaysRouter.get('/all',HolidaysController.findAll)
holidaysRouter.get('/fields', HolidaysController.getFieldNames)
holidaysRouter.get('/:id',HolidaysController.findByID)
holidaysRouter.post('/create',HolidaysController.create)
holidaysRouter.patch(`/update`,HolidaysController.update)

export default holidaysRouter
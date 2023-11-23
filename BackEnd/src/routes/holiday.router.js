import { Router } from "express";
import HolidaysController from "../controller/holidays.controller.js";

const holidaysRouter = Router();

holidaysRouter.get('/all',HolidaysController.findAll)
holidaysRouter.get('/fields', HolidaysController.getFieldNames)
holidaysRouter.get('/:id',HolidaysController.findByID)
holidaysRouter.post('/create',HolidaysController.create)
holidaysRouter.patch(`/update`,HolidaysController.update)
holidaysRouter.get(`/ShowAllHolidays`,HolidaysController.showAllHolidays) // WIP basically find all but just the holiday name and date.


export default holidaysRouter
import {Router} from 'express'
import EmployeeController from '../controller/employee.controller.js'

const employeeRouter = Router()

employeeRouter.get(`/all`,EmployeeController.findAll)
employeeRouter.get(`/fields`,EmployeeController.getColumnNames)
employeeRouter.get(`/:id`,EmployeeController.findByID)
employeeRouter.post(`/create`,EmployeeController.create)
employeeRouter.patch(`/update`,EmployeeController.update)

export default employeeRouter


import {Router} from 'express'
import EmployeeController from '../controller/employee.controller.js'

const employeeRouter = Router()

employeeRouter.get(`/all`,EmployeeController.findAll)
employeeRouter.get(`/:id`,EmployeeController.findByID)
employeeRouter.get(`/fields`,EmployeeController.getColumnNames)
employeeRouter.post(`/create`,EmployeeController.create)
employeeRouter.post(`/update`,EmployeeController.create)

export default employeeRouter
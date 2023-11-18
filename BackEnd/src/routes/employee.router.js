import {Router} from 'express'
import EmployeeController from '../controller/employee.controller.js'

const employeeRouter = Router()

employeeRouter.get(`/all`,EmployeeController.findAll)
employeeRouter.get(`/fields`,EmployeeController.getColumnNames)
employeeRouter.post(`/create`,EmployeeController.create)

export default employeeRouter
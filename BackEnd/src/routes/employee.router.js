import {Router} from 'express'
import EmployeeController from '../controller/employee.controller.js'

const router = Router()

router.get(`/all`,EmployeeController.findAll)
router.get(`/fields`,EmployeeController.getColumnNames)

export default router
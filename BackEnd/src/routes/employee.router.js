import databaseConn from '../../database.config.js'
import express,{Router} from 'express'
import EmployeeController from '../controller/employee.controller.js'

const router = Router()

router.get(`/`,EmployeeController.findAll())

export default router
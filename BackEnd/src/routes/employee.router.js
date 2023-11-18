import express,{Router} from 'express'
import EmployeeController from '../controller/employee.controller.js'

const router = Router()

router.get(`/`,(req,res)=>{
    console.log('bruh')
})

export default router
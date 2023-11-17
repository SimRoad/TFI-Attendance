import express from "express"
import {router as employeeRouter} from "./src/routes/employee.router"

express.use('/test/env/employees',employeeRouter)
express.listen(8080,()=>{
    console.log(`Server is listening on port 8080`)
})
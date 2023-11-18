import express from "express"
import cors from 'cors'
import router from "./src/routes/employee.router.js"

express().use(cors())

express().use('/',router)
express().listen(8080,()=>{
    console.log(`Server is listening on port 8080`)
})
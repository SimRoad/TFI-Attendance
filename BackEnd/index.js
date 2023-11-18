import express from "express"
import cors from 'cors'
import employeeRouter from "./src/routes/employee.router.js"
import userRouter from "./src/routes/user.router.js"

const app = express()

app.use(cors())

app.use('/employee',employeeRouter)
app.use('/user',userRouter)
app.get('*',(res,req)=>{
    req.send('404 Page not Found')
})
app.listen(8080,()=>{
    console.log(`Server is listening on port 8080`)
})
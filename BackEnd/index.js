import express from "express"
import cors from 'cors'
import employeeRouter from "./src/routes/employee.router.js"
import userRouter from "./src/routes/user.router.js"
import daySessionRouter from "./src/routes/daysession.router.js"
import holidaysRouter from "./src/routes/holiday.router.js"
import leavesRouter from "./src/routes/leaves.router.js"
import logsRouter from "./src/routes/logs.router.js"
import reasonRouter from "./src/routes/reason.router.js"
import shiftRouter from "./src/routes/shift.router.js"

const app = express()

app.use(cors())

app.use('/employee',employeeRouter)
app.use('/user',userRouter)
app.use('/Daysession',daySessionRouter)
app.use('/holidays',holidaysRouter)
app.use('/leaves',leavesRouter)
app.use('/logs',logsRouter)
app.use('/reasons',reasonRouter)
app.use('/shifts',shiftRouter)


app.get('*',(res,req)=>{
    req.send('404 Page not Found')
})
app.listen(8080,()=>{
    console.log(`Server is listening on port 8080`)
})
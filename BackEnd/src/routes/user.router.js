import {Router} from 'express'
import UserController from '../controller/user.controller.js'

const userRouter = Router()

userRouter.get(`/all`,UserController.findAll)
userRouter.get(`/fields`,UserController.getColumnNames)
userRouter.post('/create',UserController.create)
userRouter.patch('/update',UserController.update)

export default userRouter
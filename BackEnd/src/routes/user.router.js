import {Router} from 'express'
import UserController from '../controller/user.controller.js'

const userRouter = Router()

userRouter.get(`/all`,UserController.findAll)
userRouter.get(`/fields`,UserController.getColumnNames)

export default userRouter
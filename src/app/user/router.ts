import { Router } from 'express'
import { UserController } from './controller'

const userController = new UserController()

export const userRouter = Router()

userRouter.get('/list', userController.findAll)
userRouter.get('/:userId', userController.findById)

userRouter.post('/', userController.create)
userRouter.post('/login', userController.login)

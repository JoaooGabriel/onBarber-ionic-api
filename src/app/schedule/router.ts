import { Router } from 'express'
import { ScheduleController } from './controller'

const scheduleController = new ScheduleController()

export const scheduleRouter = Router()

scheduleRouter.get('/list', scheduleController.findAll)
scheduleRouter.get('/:scheduleId', scheduleController.findById)
scheduleRouter.get('/user/:userId', scheduleController.findByUserId)

scheduleRouter.post('/', scheduleController.create)
scheduleRouter.delete('/:scheduleId', scheduleController.delete)

import { Request, Response } from 'express'
import { ScheduleService } from './service'

const service = new ScheduleService()

export class ScheduleController {
  public async create(request: Request, response: Response) {
    try {
      const schedule = await service.create(request.body)

      return response.status(200).json(schedule)
    } catch (error) {
      console.log(error)
      return response.status(400).send({ error: error.message })
    }
  }
  
  public async findAll(request: Request, response: Response) {
    try {
      const schedules = await service.findAll()

      return response.status(200).json(schedules)
    } catch (error) {
      console.log(error)
      return response.status(400).send({ error: error.message })
    }
  }
  
  public async findById(request: Request, response: Response) {
    try {
      const users = await service.findById(request.params.scheduleId)

      return response.status(200).json(users)
    } catch (error) {
      console.log(error)
      return response.status(400).send({ error: error.message })
    }
  }

  public async findByUserId(request: Request, response: Response) {
    try {
      const schedules = await service.findByUserId(request.params.userId)

      return response.status(200).json(schedules)
    } catch (error) {
      console.log(error)
      return response.status(400).send({ error: error.message })
    }
  }

  public async delete(request: Request, response: Response) {
    try {
      await service.delete(request.params.scheduleId)

      return response.status(204).json()
    } catch (error) {
      console.log(error)
      return response.status(400).send({ error: error.message })
    }
  }
}
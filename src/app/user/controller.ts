import { Request, Response } from 'express'
import { UserService } from './service'

const service = new UserService()

export class UserController {
  public async create(request: Request, response: Response) {
    try {
      const user = await service.create(request.body)

      return response.status(200).json(user)
    } catch (error) {
      console.log(error)
      return response.status(400).send({ error: error.message })
    }
  }
  
  public async findAll(request: Request, response: Response) {
    try {
      const users = await service.findAll()

      return response.status(200).json(users)
    } catch (error) {
      console.log(error)
      return response.status(400).send({ error: error.message })
    }
  }
  
  public async findById(request: Request, response: Response) {
    try {
      const users = await service.findById(request.params.userId)

      return response.status(200).json(users)
    } catch (error) {
      console.log(error)
      return response.status(400).send({ error: error.message })
    }
  }

  public async login(request: Request, response: Response) {
    try {
      const user = await service.login(request.body)

      return response.status(200).json(user)
    } catch (error) {
      console.log(error)
      return response.status(400).send({ error: error.message })
    }
  }
}
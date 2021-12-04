import 'dotenv/config'
import express, { Request, Response } from 'express'
import { userRouter } from './user/router';

export const app = express()
app.use(express.json())

app.use('/v1/users/', userRouter)

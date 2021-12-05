import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { userRouter } from './user/router'
import { scheduleRouter } from './schedule/router'

export const app = express()
app.use(express.json())
app.use(cors())

app.use('/v1/users/', userRouter)
app.use('/v1/schedules/', scheduleRouter)

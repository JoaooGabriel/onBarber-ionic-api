import { mongoose } from '../../config/connection-mongoose'
import { IRegisterSchedule } from '../interfaces/ISchedule'

const ScheduleSchema = new mongoose.Schema({
  day: {
      type: String,
      required: true,
  },
  hour: {
      type: String,
      required: true,
  },
  barberName: {
      type: String,
      required: true,
  },
  userId: {
      type: String,
      required: true,
  }
})

export default mongoose.model<IRegisterSchedule>('schedules', ScheduleSchema)

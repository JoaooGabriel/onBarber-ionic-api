import { ISchedule } from './../interfaces/ISchedule';

const scheduleMapping = (schedule: ISchedule, id?: string) => {
  const scheduleResponse = {
    id,
    day: schedule.day,
    hour: schedule.hour,
    barberName: schedule.barberName,
    userId: schedule.userId
  }

  return scheduleResponse
}

export const responseScheduleMapping = (schedule: any) => {
  let responseMapping

  if (Array.isArray(schedule)) {
    if (schedule.length === 0) {
      return
    }

    responseMapping = schedule.map((s) => {
      const response = scheduleMapping(s, s._id)

      return response
    })

    return responseMapping
  }

  responseMapping = scheduleMapping(schedule, schedule._id)

  return responseMapping
}
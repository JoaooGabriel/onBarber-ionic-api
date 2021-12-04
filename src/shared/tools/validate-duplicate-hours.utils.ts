import { ISchedule } from '../interfaces/ISchedule'

export const validateDuplicateHour = async (schedules: ISchedule[], day: string, hour: string) => {
  return schedules.forEach((schedule) => {
    if (schedule.day === day) {
      if (schedule.hour === hour) {
        throw new Error('Você já possui um agendamento nesse horário!')
      }
    }
  })
}

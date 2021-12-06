import { format } from 'date-fns';
import { IRegisterSchedule } from '../../shared/interfaces/ISchedule';
import Schedule from '../../shared/schemas/Schedule';
import { responseScheduleMapping } from './../../shared/mapper/schedules-response.mapper';
import { validateDuplicateHour } from './../../shared/tools/validate-duplicate-hours.utils';

export class ScheduleService {
  public async create(data: IRegisterSchedule) {
    let { day, hour, userId } = data
    day = format(new Date(day), 'dd/MM/yyyy') // verificar porque data vem com dia menos um
    const schedules = await Schedule.find({ userId })

    await validateDuplicateHour(schedules, day, hour)

    const schedule = await Schedule.create({
      ...data,
      day
    })

    return responseScheduleMapping(schedule)
  }

  public async findAll() {
    const schedules = await Schedule.find()
    const response = responseScheduleMapping(schedules)

    return response
  }

  public async findById(scheduleId: string) {
    const schedule = await Schedule.findById(scheduleId)

    if (!schedule) {
      throw new Error('Agendamento não encontrado!')
    }

    return schedule
  }

  public async findByUserId(userId: string) {
    const schedules = await Schedule.find({ userId })
    const response = responseScheduleMapping(schedules)
    
    return response
  }

  public async delete(scheduleId: string) {
    await this.findById(scheduleId)

    return await Schedule.findByIdAndDelete(scheduleId)
  }
}
export interface ISchedule {
  id?: string
  day: string
  hour: string
  barberName: string
  userId: string
}

export interface IRegisterSchedule {
  day: string
  hour: string
  barberName: string
  userId: string
}
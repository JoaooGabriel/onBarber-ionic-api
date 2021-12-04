export interface IUser {
  id?: string
  name: string
  email: string
  phone: string
  city: string
  password: string
}

export interface IRegisterUser {
  city: string
  email: string
  name: string
  phone: string
  password: string
}
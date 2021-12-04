import { IUser } from "../interfaces/IUser"

export const registerMapping = async (user: IUser) => {
  const userResponse = {
    name: user.name,
    email: user.email
  }

  return userResponse
}

export const loginMapping = async (user: IUser, id: string) => {
  const userResponse = {
    id,
    name: user.name,
    email: user.email,
    phone: user.phone,
    city: user.city
  }

  return userResponse
}
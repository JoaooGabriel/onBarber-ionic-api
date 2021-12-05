import { IUser } from "../interfaces/IUser"

const userMapping = (user: IUser, id: string) => {
  const userResponse = {
    id,
    name: user.name,
    email: user.email,
    phone: user.phone,
    city: user.city
  }

  return userResponse
}

export const registerMapping = (user: IUser) => {
  const userResponse = {
    name: user.name,
    email: user.email
  }

  return userResponse
}

export const responseMapping = (user: any) => {
  let responseMapping

  if (Array.isArray(user)) {
    if (user.length === 0) {
      return
    }
    responseMapping = user.map((u) => {
      const response = userMapping(u, u._id)

      return response
    })

    return responseMapping
  }

  responseMapping = userMapping(user, user._id)

  return responseMapping
}

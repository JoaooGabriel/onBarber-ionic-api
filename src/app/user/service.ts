import { IRegisterUser } from '../../shared/interfaces/IUser'
import { registerMapping, responseUserMapping } from '../../shared/mapper/user-response.mapper'
import User from '../../shared/schemas/User'
import { verifyPassword } from '../../shared/tools/password.utils'

export class UserService {
  public async create(data: IRegisterUser) {
    const { email, phone } = data
    const userExists = await User.findOne({ email })

    if (userExists && userExists.phone === phone) {
      throw new Error('Usuário já cadastrado!')
    }

    const user = await User.create(data)

    return registerMapping(user)
  }

  public async findAll() {
    const users = await User.find()

    const response = responseUserMapping(users)

    return response
  }

  public async findById(userId: string) {
    const user = await User.findById(userId)

    if (!user) {
      throw new Error('Usuário não existe!')
    }

    return user
  }

  public async login(data: IRegisterUser) {
    const { email, password } = data

    if (!email || !password) {
      throw new Error('E-mail ou senha inválidos!')
    }

    const user = await User.findOne({ email }).select('+password')
    
    if (!user) {
      throw new Error('E-mail ou senha incorretos!')
    }

    const comparePassword = await verifyPassword(user.password, password)

    if (!comparePassword) {
      throw new Error('E-mail ou senha incorretos!');
    }

    return responseUserMapping(user)
  }
}

import { mongoose } from '../../config/connection-mongoose'
import { IRegisterUser } from '../interfaces/IUser'
import { hashPassword } from '../tools/utils/password.utils'

const UserSchema = new mongoose.Schema({
  name: {
      type: String,
      required: true,
  },
  email: {
      type: String,
      unique: true,
      required: true,
  },
  password: {
      type: String,
      required: true,
      select: false,
      minlength: 8
  },
  phone: {
      type: String,
      unique: true,
      required: true,
  },
  city: {
      type: String,
      required: true,
  }
})

UserSchema.pre('save', async function (this: IRegisterUser, next) {
  const hash = await hashPassword(this.password)
  this.password = hash;

  next()
})

export default mongoose.model<IRegisterUser>('users', UserSchema)

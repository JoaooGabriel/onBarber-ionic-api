import mongoose from 'mongoose'

const url = String(process.env.MONGO_BASE_PATH)
const mongooseConnection = mongoose.connect(url, { dbName: process.env.ONBARBER_MONGO_DBNAME })

export { mongoose, mongooseConnection }

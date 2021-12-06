import { app as server } from './app/app'
import { mongooseConnection } from './config/connection-mongoose'

const serverPort = process.env.PORT || 3333

mongooseConnection
  .then(() => {
    console.log('Mongoose connected')

    server.listen(serverPort, () => {
      console.log(`server running on port ${serverPort}`)
    })
  }).catch((err) => {
    console.log(err)
  })

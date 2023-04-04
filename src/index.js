import { sequelize } from '#config/db.js'
import routesWeb from '#routesWeb/index.js'
import routesMobile from '#routesMobile/index.js'
import '#models/index.js'

import express from 'express'
import cors from 'cors'

export class Server {
  constructor () {
    this.app = express()
    this.port = process.env.PORT || 8084
    this.connectDB()
    this.middlewares()
    this.app.use('/api/web', routesWeb)
    this.app.use('/api/mobile', routesMobile)
  }

  middlewares () {
    this.app.use(cors())
    this.app.use(express.json())
  }

  async connectDB () {
    try {
      // await sequelize.sync({ force: true })
      await sequelize.sync()
      // await sequelize.authenticate();
      console.log('Database runing 🚀🚀')
    } catch (error) {
      console.log(error.message)
    }
  }

  listen () {
    this.app.listen(this.port, () => {
      console.log(`Server runing in http://localhost:${this.port} 🚀🚀`)
    })
  }
}

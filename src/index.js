import express from 'express'

import { sequelize } from './config/db.js'
import routes from './routes/index.js'
import './modules/index.js'

export class Server {
  constructor () {
    this.app = express()
    this.port = process.env.PORT || 8084
    this.connectDB()
    this.middlewares()
    this.app.use('/api', routes)
  }

  middlewares () {
    this.app.use(express.json())
  }

  async connectDB () {
    try {
      await sequelize.sync({ force: true });
      // await sequelize.sync()
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

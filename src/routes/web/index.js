import { Router } from 'express'
import userRouter from './user.routes.js'
import authRouter from './auth.routes.js'
import customerRouter from './customer.routes.js'
import rolRouter from './rol.routes.js'
import menuRouter from './menu.routes.js'

const router = Router()

router
  .use('/user', userRouter)
  .use('/auth', authRouter)
  .use('/customer', customerRouter)
  .use('/rol', rolRouter)
  .use('/menu', menuRouter)

export default router

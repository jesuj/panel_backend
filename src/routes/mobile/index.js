import userRouter from '#routesMobile/user.routes.js'
import { Router } from 'express'

const router = Router()

router
  .use('/user', userRouter)

export default router

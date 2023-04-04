
import userController from '#controllers/mobile/user.controller.js'
import { Router } from 'express'

const router = Router()

router.post('/pin', userController.sendPin)

export default router

import authController from '#controllers/web/auth.controller.js'
import authValidation from '#validations/auth.validation.js'

import { Router } from 'express'

const router = Router()

router
  .post('/login', authValidation.loginWeb, authController.login)

export default router

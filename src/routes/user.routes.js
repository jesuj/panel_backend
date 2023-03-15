import { Router } from 'express'

import userController from '../controllers/user.controller.js'

const router = Router()

router
  .get('/', userController.getAllUser)
  .get('/:id', userController.getOneUser)
  .post('/', userController.createNewUser)
  .patch('/:id', userController.updateOneUser)
  .delete('/:id', userController.deleteOneUser)

export default router

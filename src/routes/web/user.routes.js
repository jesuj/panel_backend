import userController from '#controllers/web/user.controller.js'
import userValidation from '#validations/user.validation.js'

import { Router } from 'express'

const router = Router()

router
  .get('/', userController.getAllUser)
  .get('/:id', userValidation.paramsId, userController.getOneUser)
  .post('/', userValidation.createUser, userController.createNewUser)
  .patch('/update-password', userController.updatePasswordById)
  .patch('/:id',
    userValidation.paramsId,
    userValidation.updateUser,
    userController.updateOneUser
  )
  .delete('/:id', userValidation.paramsId, userController.deleteOneUser)

export default router

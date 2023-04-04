import rolController from '#controllers/web/rol.controller.js'
import rolValidation from '#validations/rol.validation.js'
import { Router } from 'express'

const router = Router()

router
  .get('/', rolController.getAllRoles)
  .get('/:id', rolValidation.paramsId, rolController.getRolById)
  .post('/', rolValidation.createRol, rolController.createRol)
  .patch('/:id',
    rolValidation.paramsId,
    rolValidation.updateRol,
    rolController.updateRolById
  )
  .delete('/:id', rolValidation.paramsId, rolController.deleteRolById)

export default router

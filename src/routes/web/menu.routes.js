import menuController from '#controllers/web/menu.controller.js'
import menuValidation from '#validations/menu.validation.js'
import { Router } from 'express'

const router = Router()

router
  .get('/', menuController.getAllMenus)
  .get('/:id', menuValidation.paramsId, menuController.getMenuById)
  .post('/', menuValidation.createMenu, menuController.createMenu)
  .patch('/:id',
    menuValidation.paramsId,
    menuValidation.updateMenu,
    menuController.updateMenuById
  )
  .delete('/:id', menuValidation.paramsId, menuController.deleteMenuById)
  .post('/getmenu', menuController.getMenu)

export default router

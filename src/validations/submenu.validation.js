import { handleValidation } from '#middlewares/validation.middleware.js'

import { body, param } from 'express-validator'

export const createSubmenu = [
  body('name')
    .exists().withMessage('Es obligatorio el campo name')
    .isString().trim().withMessage('El campo no tiene el tipo correcto')
    .isLength({ min: 3, max: 50 }).withMessage('El minimo es 3 y el maximo 50 caracteres'),
  body('read')
    .optional()
    .isBoolean().withMessage('El campo no tiene el tipo correcto'),
  body('write')
    .optional()
    .isBoolean().withMessage('El campo no tiene el tipo correcto'),
  body('view')
    .optional()
    .isBoolean().withMessage('El campo no tiene el tipo correcto'),
  body('url')
    .exists().withMessage('Es obligatorio el campo url')
    .isString().trim().withMessage('El campo no tiene el tipo correcto'),
  body('icon')
    .optional()
    .isString().trim().withMessage('El campo no tiene el tipo correcto'),
  body('menu_id')
    .exists().withMessage('Es obligatorio el campo menu_id')
    .isInt().withMessage('No es un valor entero el identificador'),
  handleValidation
]

export const paramsId = [
  param('id')
    .exists().withMessage('No tiene el identificador')
    .isInt().withMessage('No es un valor entero el identificador'),
  handleValidation
]

export const updateSubmenu = [
  body('name')
    .optional()
    .isString().trim().withMessage('El campo no tiene el tipo correcto')
    .isLength({ min: 3, max: 50 }).withMessage('El minimo es 3 y el maximo 50 caracteres'),
  body('read')
    .optional()
    .isBoolean().withMessage('El campo no tiene el tipo correcto'),
  body('write')
    .optional()
    .isBoolean().withMessage('El campo no tiene el tipo correcto'),
  body('view')
    .optional()
    .isBoolean().withMessage('El campo no tiene el tipo correcto'),
  body('url')
    .optional()
    .isString().trim().withMessage('El campo no tiene el tipo correcto'),
  body('icon')
    .optional()
    .isString().trim().withMessage('El campo no tiene el tipo correcto'),
  body('menu_id')
    .optional()
    .isInt().withMessage('No es un valor entero el identificador'),
  handleValidation
]

export default {
  createSubmenu,
  paramsId,
  updateSubmenu
}

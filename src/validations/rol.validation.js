import { handleValidation } from '#middlewares/validation.middleware.js'

import { body, param } from 'express-validator'

export const createRol = [
  body('name')
    .exists().withMessage('Es obligatorio el campo name')
    .isString().trim().withMessage('El campo no tiene el tipo correcto')
    .isLength({ min: 3, max: 50 }).withMessage('El minimo es 3 y el maximo 50 caracteres'),
  handleValidation
]

export const paramsId = [
  param('id')
    .exists().withMessage('No tiene el identificador')
    .isInt().withMessage('No es un valor entero el identificador'),
  handleValidation
]

export const updateRol = [
  body('name')
    .exists().withMessage('Es obligatorio el campo name')
    .isString().trim().withMessage('El campo no tiene el tipo correcto')
    .isLength({ min: 3, max: 50 }).withMessage('El minimo es 3 y el maximo 50 caracteres'),
  handleValidation
]

export default {
  createRol,
  paramsId,
  updateRol
}

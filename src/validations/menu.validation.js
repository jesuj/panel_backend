import { handleValidation } from '#middlewares/validation.middleware.js'

import { body, param } from 'express-validator'

export const createMenu = [
  body('name')
    .exists().withMessage('Es obligatorio el campo name')
    .isString().trim().withMessage('El campo no tiene el tipo correcto')
    .isLength({ min: 3, max: 50 }).withMessage('El minimo es 3 y el maximo 50 caracteres'),
  body('prefix')
    .exists().withMessage('Es obligatorio el campo prefix')
    .isString().trim().withMessage('El campo no tiene el tipo correcto')
    .isLength({ min: 3, max: 50 }).withMessage('El minimo es 3 y el maximo 50 caracteres'),
  body('icon')
    .optional()
    .isString().trim().withMessage('El campo no tiene el tipo correcto')
    .isLength({ min: 3, max: 250 }).withMessage('El minimo es 3 y el maximo 250 caracteres'),
  handleValidation
]

export const paramsId = [
  param('id')
    .exists().withMessage('No tiene el identificador')
    .isInt().withMessage('No es un valor entero el identificador'),
  handleValidation
]

export const updateMenu = [
  body('name')
    .optional()
    .isString().trim().withMessage('El campo no tiene el tipo correcto')
    .isLength({ min: 3, max: 50 }).withMessage('El minimo es 3 y el maximo 50 caracteres'),
  body('prefix')
    .optional()
    .isString().trim().withMessage('El campo no tiene el tipo correcto')
    .isLength({ min: 3, max: 50 }).withMessage('El minimo es 3 y el maximo 50 caracteres'),
  body('icon')
    .optional()
    .isString().trim().withMessage('El campo no tiene el tipo correcto')
    .isLength({ min: 3, max: 250 }).withMessage('El minimo es 3 y el maximo 250 caracteres'),
  handleValidation
]

export default {
  createMenu,
  paramsId,
  updateMenu
}

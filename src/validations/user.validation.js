import { handleValidation } from '#middlewares/validation.middleware.js'

import { body, param } from 'express-validator'

export const createUser = [
  body('user_name')
    .exists().withMessage('Es obligatorio el campo name')
    .isString().trim().withMessage('El campo no tiene el tipo correcto')
    .isLength({ min: 3, max: 20 }).withMessage('El minimo es 3 y el maximo 20 caracteres'),
  body('password')
    .exists().withMessage('Es obligatorio el campo password')
    .isString().trim().withMessage('El campo no tiene el tipo correcto'),
  body('email')
    .optional()
    .isString().trim().withMessage('El campo no tiene el tipo correcto')
    .isLength({ min: 3, max: 50 }).withMessage('El minimo es 3 y el maximo 50 caracteres'),
  body('pin')
    .optional()
    .isInt().withMessage('No es un valor entero el identificador'),
  body('token')
    .optional()
    .isString().trim().withMessage('El campo no tiene el tipo correcto'),
  body('customer_id')
    .exists().withMessage('Es obligatorio el campo customer_id')
    .isInt().withMessage('No es un valor entero el identificador'),
  body('rol_id')
    .exists().withMessage('Es obligatorio el campo rol_id')
    .isInt().withMessage('No es un valor entero el identificador'),
  handleValidation
]

export const paramsId = [
  param('id')
    .exists().withMessage('No tiene el identificador')
    .isInt().withMessage('No es un valor entero el identificador'),
  handleValidation
]

export const updateUser = [
  body('user_name')
    .optional()
    .isString().trim().withMessage('El campo no tiene el tipo correcto')
    .isLength({ min: 3, max: 20 }).withMessage('El minimo es 3 y el maximo 20 caracteres'),
  body('password')
    .optional()
    .isString().trim().withMessage('El campo no tiene el tipo correcto'),
  body('email')
    .optional()
    .isString().trim().withMessage('El campo no tiene el tipo correcto')
    .isLength({ min: 3, max: 50 }).withMessage('El minimo es 3 y el maximo 50 caracteres'),
  body('pin')
    .optional()
    .isInt().withMessage('No es un valor entero el identificador'),
  body('token')
    .optional()
    .isString().trim().withMessage('El campo no tiene el tipo correcto'),
  body('customer_id')
    .optional()
    .isInt().withMessage('No es un valor entero el identificador'),
  body('rol_id')
    .optional()
    .isInt().withMessage('No es un valor entero el identificador'),
  handleValidation
]

export default {
  createUser,
  paramsId,
  updateUser
}

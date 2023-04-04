import { handleValidation } from '#middlewares/validation.middleware.js'

import { body } from 'express-validator'

export const loginWeb = [
  body('user_name')
    .exists().withMessage('Es obligatorio el campo name')
    .isString().trim().withMessage('El campo no tiene el tipo correcto')
    .isLength({ min: 3, max: 20 }).withMessage('El minimo es 3 y el maximo 20 caracteres'),
  body('password')
    .exists().withMessage('Es obligatorio el campo name')
    .isString().trim().withMessage('El campo no tiene el tipo correcto')
    .isLength({ min: 3, max: 30 }).withMessage('El minimo es 3 y el maximo 30 caracteres'),
  handleValidation
]

export default {
  loginWeb
}

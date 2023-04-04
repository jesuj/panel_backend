import { handleValidation } from '#middlewares/validation.middleware.js'

import { body, param } from 'express-validator'

export const createCustomer = [
  body('name')
    .exists().withMessage('Es obligatorio el campo name')
    .isString().trim().withMessage('El campo no tiene el tipo correcto')
    .isLength({ min: 3, max: 50 }).withMessage('El minimo es 3 y el maximo 50 caracteres'),
  body('lastname_father')
    .optional()
    .isString().trim().withMessage('El campo no tiene el tipo correcto')
    .isLength({ min: 3, max: 50 }).withMessage('El minimo es 3 y el maximo 50 caracteres'),
  body('lastname_mother')
    .optional()
    .isString().trim().withMessage('El campo no tiene el tipo correcto')
    .isLength({ min: 3, max: 50 }).withMessage('El minimo es 3 y el maximo 50 caracteres'),
  body('ci')
    .optional()
    .isString().trim().withMessage('El campo no tiene el tipo correcto')
    .isLength({ min: 3, max: 50 }).withMessage('El minimo es 3 y el maximo 50 caracteres'),
  body('birthdate')
    .optional()
    .isDate().withMessage('Tiene que ser una Fecha'),
  body('cellphone')
    .optional()
    .isString().trim().withMessage('El campo no tiene el tipo correcto')
    .isLength({ min: 3, max: 50 }).withMessage('El minimo es 3 y el maximo 50 caracteres'),
  body('photo_url')
    .optional()
    .isString().trim().withMessage('El campo no tiene el tipo correcto'),
  handleValidation
]

export const paramsId = [
  param('id')
    .exists().withMessage('No tiene el identificador')
    .isInt().withMessage('No es un valor entero el identificador'),
  handleValidation
]

export const updateCustomer = [
  body('name')
    .optional()
    .isString().trim().withMessage('El campo no tiene el tipo correcto')
    .isLength({ min: 3, max: 50 }).withMessage('El minimo es 3 y el maximo 50 caracteres'),
  body('lastname_father')
    .optional()
    .isString().trim().withMessage('El campo no tiene el tipo correcto')
    .isLength({ min: 3, max: 50 }).withMessage('El minimo es 3 y el maximo 50 caracteres'),
  body('lastname_mother')
    .optional()
    .isString().trim().withMessage('El campo no tiene el tipo correcto')
    .isLength({ min: 3, max: 50 }).withMessage('El minimo es 3 y el maximo 50 caracteres'),
  body('ci')
    .optional()
    .isString().trim().withMessage('El campo no tiene el tipo correcto')
    .isLength({ min: 3, max: 50 }).withMessage('El minimo es 3 y el maximo 50 caracteres'),
  body('birthdate')
    .optional()
    .isDate().withMessage('Tiene que ser una Fecha'),
  body('cellphone')
    .optional()
    .isString().trim().withMessage('El campo no tiene el tipo correcto')
    .isLength({ min: 3, max: 50 }).withMessage('El minimo es 3 y el maximo 50 caracteres'),
  body('photo_url')
    .optional()
    .isString().trim().withMessage('El campo no tiene el tipo correcto'),
  handleValidation
]

export default {
  createCustomer,
  paramsId,
  updateCustomer
}

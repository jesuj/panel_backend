import { validationResult } from 'express-validator'

export const handleValidation = (req, res, next) => {
  try {
    validationResult(req).throw()
    next()
  } catch (error) {
    return res.status(403).json({ errors: error.array() })
  }
}

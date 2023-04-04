import customerController from '#controllers/web/customer.controller.js'
import customerValidation from '#validations/customer.validation.js'
import { Router } from 'express'

const router = Router()

router
  .get('/', customerController.getAllCustomers)
  .get('/:id', customerValidation.paramsId, customerController.getCustomerById)
  .post('/', customerValidation.createCustomer, customerController.createCustomer)
  .patch('/:id',
    customerValidation.paramsId,
    customerValidation.updateCustomer,
    customerController.updateCustomerById
  )
  .delete('/:id', customerValidation.paramsId, customerController.deleteCustomerById)

export default router

import customerServices from '#services/web/customer.services.js'

import { matchedData } from 'express-validator'
import { request, response } from 'express'

export const getAllCustomers = async (req = request, res = response) => {
  try {
    const allCustomers = await customerServices.getAllCustomers()
    res.status(200)
      .json({
        state: true,
        data: allCustomers,
        msg: 'successful'
      })
  } catch (error) {
    res.status(error?.status || 500)
      .json({
        state: false,
        data: {
          error: error?.message || error
        }
      })
  }
}

export const getCustomerById = async (req = request, res = response) => {
  const { params: { id } } = req
  try {
    const customer = await customerServices.getCustomerById(id)
    res.status(200)
      .json({
        state: true,
        data: customer,
        msg: 'successful'
      })
  } catch (error) {
    res.status(error?.status || 500)
      .json({
        state: false,
        data: {
          error: error?.message || error
        },
        msg: 'faild'
      })
  }
}

export const createCustomer = async (req = request, res = response) => {
  const customer = matchedData(req)
  try {
    const createdCustomer = await customerServices.createCustomer(customer)
    console.log({ createdCustomer })
    res.status(201)
      .json({
        state: true,
        data: createdCustomer,
        msg: 'successful'
      })
  } catch (error) {
    res.status(error?.status || 500)
      .json({
        state: false,
        data: {
          error: error?.message || error
        },
        msg: 'faild'
      })
  }
}

export const updateCustomerById = async (req = request, res = response) => {
  const { params: { id } } = req
  const customer = matchedData(req)
  try {
    const updatedCustomer = await customerServices.updateCustomerById({ id, customer })
    res.status(200)
      .json({
        state: true,
        data: updatedCustomer,
        msg: 'successful'
      })
  } catch (error) {
    res.status(error?.status || 500)
      .json({
        state: false,
        data: {
          error: error?.message || error
        },
        msg: 'faild'
      })
  }
}

export const deleteCustomerById = async (req = request, res = response) => {
  const { params: { id } } = req
  try {
    const deletedCustomer = await customerServices.deleteCustomerById(id)
    res.status(200)
      .json({
        state: true,
        data: deletedCustomer,
        msg: 'successful'
      })
  } catch (error) {
    res.status(error?.status || 500)
      .json({
        state: false,
        data: {
          error: error?.message || error
        },
        msg: 'faild'
      })
  }
}

export default {
  getAllCustomers,
  getCustomerById,
  createCustomer,
  updateCustomerById,
  deleteCustomerById
}

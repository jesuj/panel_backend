import { Customer } from '#models/index.js'

export const getAllCustomers = async () => {
  const customers = await Customer.findAll({
    where: {
      deleted: 0
    },
    attributes: { exclude: ['deleted', 'updatedAt', 'createdAt'] }
  })
  return customers
}

export const getCustomerById = async (id) => {
  const customer = await Customer.findOne({
    where: {
      deleted: 0,
      id
    },
    attributes: { exclude: ['deleted', 'updatedAt', 'createdAt'] }
  })
  return customer
}

export const createCustomer = async (customer) => {
  const createdUser = await Customer.create(customer)
  const { deleted, updatedAt, createdAt, ...user } = createdUser.dataValues
  return user
}

export const updateCustomerById = async ({ id, customer }) => {
  const updateCustomer = await Customer.update(customer, {
    where: {
      deleted: 0,
      id
    }
  })
  return updateCustomer
}

export const deleteCustomerById = async (id) => {
  const customer = await Customer.update({ deleted: 1 }, {
    where: { id }
  })
  return customer
}

export default {
  createCustomer,
  deleteCustomerById,
  getAllCustomers,
  getCustomerById,
  updateCustomerById
}

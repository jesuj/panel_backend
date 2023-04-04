import { Customer, User } from '#models/index.js'

export const getUserByCustomerId = async (customer_id) => { // eslint-disable-line
  const user = await User.findOne({
    include: [
      {
        model: Customer,
        required: false,
        attributes: { exclude: ['deleted', 'updatedAt', 'createdAt'] }
      }
    ],
    where: {
      deleted: 0,
      customer_id // eslint-disable-line
    },
    attributes: { exclude: ['deleted', 'updatedAt', 'createdAt'] }
  })
  return user
}

export default {
  getUserByCustomerId
}

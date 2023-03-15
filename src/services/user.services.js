import { User } from '../modules/user.js'

export const getAllUser = () => {

}
export const getOneUser = async (id) => {
  const user = await User.findByPk(id)
  return user
}
export const createNewUser = async (user) => {
  const createdUser = await User.create(user)
  return createdUser
}
export const updateOneUser = () => {

}
export const deleteOneUser = () => {

}

export default {
  getAllUser,
  getOneUser,
  createNewUser,
  updateOneUser,
  deleteOneUser
}

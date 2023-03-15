import userService from '../services/user.services.js'

export const getAllUser = (req, res) => {
  const allUser = userService.getAllUser()
  return allUser
}

export const getOneUser = async (req, res) => {
  const {
    params: { id }
  } = req
  try {
    const user = await userService.getOneUser(id)
    console.log('user-controller', user)
    res
      .status(200)
      .json({
        status: 'successful',
        data: user
      })
  } catch (error) {
    res
      .status(error?.status || 500)
      .json({
        status: 'FAILDED',
        data: {
          error: error?.message || error
        }
      })
  }
}

export const createNewUser = (req, res) => {
  const { body } = req
  const user = {
    name: body.name,
    password: body.password,
    email: body.email
  }
  try {
    const createdUser = userService.createNewUser(user)
    res
      .status(201)
      .json({
        status: 'successful',
        data: createdUser
      })
  } catch (error) {
    res
      .status(error?.status || 500)
      .json({
        status: 'FAILDED',
        data: {
          error: error?.message || error
        }
      })
  }
}

export const updateOneUser = (req, res) => {
  const updateOneUser = userService.updateOneUser()
  return updateOneUser
}

export const deleteOneUser = (req, res) => {
  const deleteOneUser = userService.deleteOneUser()
  return deleteOneUser
}

export default {
  getAllUser,
  getOneUser,
  createNewUser,
  updateOneUser,
  deleteOneUser
}

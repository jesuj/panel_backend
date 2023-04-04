import userService from '#services/web/user.services.js'

import { matchedData } from 'express-validator'
import { request, response } from 'express'

export const getAllUser = (req = request, res = response) => {
  try {
    const allUsers = userService.getAllUser()
    res.status(200)
      .json({
        state: true,
        data: allUsers,
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

export const getOneUser = async (req = request, res = response) => {
  const { params: { id } } = req
  try {
    const user = await userService.getUserById(id)
    res.status(200)
      .json({
        state: true,
        data: user,
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

export const createNewUser = async (req = request, res = response) => {
  const user = matchedData(req)
  try {
    const createdUser = await userService.createUser(user)
    res.status(201)
      .json({
        state: true,
        data: createdUser,
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

export const updateOneUser = (req = request, res = response) => {
  try {
    const updatedOneUser = userService.updateUserById()
    res.status(200)
      .json({
        state: true,
        data: updatedOneUser,
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

export const deleteOneUser = (req = request, res = response) => {
  try {
    const deletedOneUser = userService.deleteUserById()
    res.status(200)
      .json({
        state: true,
        data: deletedOneUser,
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

export const updatePasswordById = async (req = request, res = response) => {
  console.log(req.body)
  const { id, password, new_password: newPassword, new_password2: newPassword2 } = req.body
  try {
    console.log('first2', newPassword.length)
    if (newPassword.length <= 5) {
      return res.json({
        state: false,
        msg: 'La contraseña debe tener más de 6 caracteres'
      })
    }
    console.log('first3')
    if (newPassword !== newPassword2) {
      return res.json({ state: false, msg: 'La nueva contraseña no coincide' })
    }
    const data = await userService.updatePasswordById(id, password, newPassword)
    console.log('first', data)
    return res.status(200).json(data)
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
  getAllUser,
  getOneUser,
  createNewUser,
  updateOneUser,
  deleteOneUser,
  updatePasswordById
}

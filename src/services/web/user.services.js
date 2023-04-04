import { Customer, Rol, User } from '#models/index.js'

import bcrypt from 'bcrypt'

export const getAllUser = async () => {
  const users = await User.findAll({
    where: {
      deleted: 0
    },
    attributes: { exclude: ['deleted', 'updatedAt', 'createdAt'] }
  })
  return users
}

export const getUserById = async (id) => {
  const user = await User.findOne({
    where: {
      deleted: 0,
      id
    },
    attributes: { exclude: ['deleted', 'updatedAt', 'createdAt'] }
  })
  return user
}

export const getUserByUserName = async (user_name) => { // eslint-disable-line
  const user = await User.findOne({
    include: [
      {
        model: Customer,
        required: false,
        attributes: { exclude: ['deleted', 'updatedAt', 'createdAt'] }
      },
      {
        model: Rol,
        required: false,
        attributes: { exclude: ['deleted', 'updatedAt', 'createdAt'] }
      }
    ],
    where: {
      deleted: 0,
      user_name // eslint-disable-line
    },
    attributes: { exclude: ['deleted', 'updatedAt', 'createdAt'] }
  })
  return user
}

export const createUser = async (user) => {
  const salt = bcrypt.genSaltSync()
  const encryptedPass = bcrypt.hashSync(user.password, salt)
  user.password = encryptedPass
  const createdUser = await User.create(user)
  return createdUser
}

export const updateUserById = async ({ id, user }) => {
  if (user.password) {
    const salt = bcrypt.genSaltSync()
    const encryptedPass = bcrypt.hashSync(user.password, salt)
    user.password = encryptedPass
  }
  const updateUser = await User.update(user, {
    where: {
      deleted: 0,
      id
    }
  })
  return updateUser
}

export const deleteUserById = async (id) => {
  const user = await User.update({ deleted: 1 }, {
    where: { id }
  })
  return user
}

export const updatePasswordById = async (id, password, newPassword) => {
  try {
    console.log('222222')
    const usuario = await getUserById(id)
    console.log({ usuario })
    if (usuario === null) {
      return {
        state: false,
        msg: 'El usuario es incorrecto'
      }
    }
    const match = await bcrypt.compare(password, usuario.password)
    if (!match) {
      return {
        state: false,
        msg: 'La contraseña actual es incorrecta'
      }
    }
    const salt = bcrypt.genSaltSync()
    const encryptedPass = bcrypt.hashSync(newPassword, salt)
    usuario.password = encryptedPass
    await usuario.save()
    return {
      state: true,
      msg: 'Contraseña actualizada exitosamente'
    }
  } catch (error) {
    console.log(error)
    return {
      state: false,
      msg: 'Error en la actualización'
    }
  }
}

export default {
  createUser,
  deleteUserById,
  getAllUser,
  getUserById,
  getUserByUserName,
  updateUserById,
  updatePasswordById
}

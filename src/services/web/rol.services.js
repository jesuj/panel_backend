import { Rol } from '#models/index.js'

export const getAllRoles = async () => {
  const roles = await Rol.findAll({
    where: {
      deleted: 0
    },
    attributes: { exclude: ['deleted', 'updatedAt', 'createdAt'] }
  })
  return roles
}

export const getRolById = async (id) => {
  const rol = await Rol.findOne({
    where: {
      deleted: 0,
      id
    },
    attributes: { exclude: ['deleted', 'updatedAt', 'createdAt'] }
  })
  return rol
}

export const createRol = async (rol) => {
  const createdRol = await Rol.create(rol)
  const { deleted, updatedAt, createdAt, ...result } = createdRol.dataValues
  return result
}

export const updateRolById = async ({ id, rol }) => {
  console.log({ id, rol })
  const updateRol = await Rol.update(rol, {
    where: {
      deleted: 0,
      id
    }
  })
  return updateRol
}

export const deleteRolById = async (id) => {
  const rol = await Rol.update({ deleted: 1 }, {
    where: { id }
  })
  return rol
}

export default {
  createRol,
  deleteRolById,
  getAllRoles,
  getRolById,
  updateRolById
}

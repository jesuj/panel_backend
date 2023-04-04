import rolServices from '#services/web/rol.services.js'

import { matchedData } from 'express-validator'
import { request, response } from 'express'

export const getAllRoles = async (req = request, res = response) => {
  try {
    const allRoles = await rolServices.getAllRoles()
    res.status(200)
      .json({
        state: true,
        data: allRoles,
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

export const getRolById = async (req = request, res = response) => {
  const { params: { id } } = req
  try {
    const rol = await rolServices.getRolById(id)

    res.status(200)
      .json({
        state: true,
        data: rol,
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

export const createRol = async (req = request, res = response) => {
  const rol = matchedData(req)
  try {
    const createdRol = await rolServices.createRol(rol)
    res.status(201)
      .json({
        state: true,
        data: createdRol,
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

export const updateRolById = async (req = request, res = response) => {
  const { params: { id } } = req
  const rol = matchedData(req)
  try {
    const updatedRol = await rolServices.updateRolById({ id, rol })
    res.status(200)
      .json({
        state: true,
        data: updatedRol,
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

export const deleteRolById = async (req = request, res = response) => {
  const { params: { id } } = req
  try {
    const deletedRol = await rolServices.deleteRolById(id)
    res.status(200)
      .json({
        state: true,
        data: deletedRol,
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
  getAllRoles,
  getRolById,
  createRol,
  updateRolById,
  deleteRolById
}

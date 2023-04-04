import menuServices from '#services/web/menu.services.js'
import { matchedData } from 'express-validator'
import { request, response } from 'express'
export const getAllMenus = async (req = request, res = response) => {
  try {
    const allMenus = await menuServices.getAllMenus()
    res.status(200)
      .json({
        state: true,
        data: allMenus,
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

export const getMenuById = async (req = request, res = response) => {
  const { params: { id } } = req
  try {
    const menu = await menuServices.getMenuById(id)

    res.status(200)
      .json({
        state: true,
        data: menu,
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

export const createMenu = async (req = request, res = response) => {
  const menu = matchedData(req)
  try {
    const createdMenu = await menuServices.createMenu(menu)
    res.status(201)
      .json({
        state: true,
        data: createdMenu,
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

export const updateMenuById = async (req = request, res = response) => {
  const { params: { id } } = req
  const menu = matchedData(req)
  try {
    const updatedMenu = await menuServices.updateMenuById({ id, menu })
    res.status(200)
      .json({
        state: true,
        data: updatedMenu,
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

export const deleteMenuById = async (req = request, res = response) => {
  const { params: { id } } = req
  try {
    const deletedMenu = await menuServices.deleteMenuById(id)
    res.status(200)
      .json({
        state: true,
        data: deletedMenu,
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

export const getMenu = async (req = request, res = response) => {
  const { rol_id } = req.body // eslint-disable-line
  console.log({ rol_id }) // eslint-disable-line
  try {
    const menus = await menuServices.getMenuFormat(rol_id)
    const menusUpdate = menus.map(({ dataValues: { Submenus, ...rest } }) => ({
      ...rest,
      children: Submenus.map(({ dataValues: { RolesSubmenu, ...submenuRest } }) => submenuRest)
    }))

    return res.json({
      state: true,
      data: menusUpdate,
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
  getAllMenus,
  getMenuById,
  createMenu,
  updateMenuById,
  deleteMenuById,
  getMenu
}

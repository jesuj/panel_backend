import { Menu, Submenu, RolesSubmenu } from '#models/index.js'
import sequelize from 'sequelize'

export const getAllMenus = async () => {
  const menus = await Menu.findAll({
    where: {
      deleted: 0
    },
    attributes: { exclude: ['deleted', 'updatedAt', 'createdAt'] }
  })
  return menus
}

export const getMenuById = async (id) => {
  const menu = await Menu.findOne({
    where: {
      deleted: 0,
      id
    },
    attributes: { exclude: ['deleted', 'updatedAt', 'createdAt'] }
  })
  return menu
}

export const createMenu = async (menu) => {
  const createdMenu = await Menu.create(menu)
  const { deleted, updatedAt, createdAt, ...result } = createdMenu.dataValues
  return result
}

export const updateMenuById = async ({ id, menu }) => {
  console.log({ id, menu })
  const updateMenu = await Menu.update(menu, {
    where: {
      deleted: 0,
      id
    }
  })
  return updateMenu
}

export const deleteMenuById = async (id) => {
  const menu = await Menu.update({ deleted: 1 }, {
    where: { id }
  })
  return menu
}

export const getMenuFormat = async (rol_id) => { // eslint-disable-line
  const menus = await Menu.findAll({
    where: { deleted: 0 },
    attributes: {
      include: [
        ['prefix', 'id'],
        [sequelize.literal("'collapsible'"), 'type'],
        ['name', 'title'],
        'icon'
        // ['Submenus','children']
      ],
      exclude: ['name', 'prefix', 'deleted', 'updatedAt', 'createdAt']
    },
    include: [
      {
        model: Submenu,
        required: true,
        attributes: {
          include: [
            ['name_key', 'id'],
            [sequelize.literal("'item'"), 'type'],
            ['name', 'title'],
            'icon',
            'url'
          ],
          exclude: ['name_key', 'menu_id', 'name', 'deleted', 'updatedAt', 'createdAt']
        },
        include: [
          {
            model: RolesSubmenu,
            required: true,
            where: { can_view: true, rol_id }, // eslint-disable-line
            attributes: ['id', 'rol_id', 'can_view']
          }
        ]
      }
    ]
  })
  return menus
}

export default {
  createMenu,
  deleteMenuById,
  getAllMenus,
  getMenuById,
  updateMenuById,
  getMenuFormat
}

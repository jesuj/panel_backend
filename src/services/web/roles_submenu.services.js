import { RolesSubmenu, Submenu } from '#models/index.js'

export const getAllRolesSubmenusByRolId = async (rol_id) => { // eslint-disable-line
  console.log(rol_id)
  const rolesSubmenu = await RolesSubmenu.findAll({
    where: {
      rol_id, // eslint-disable-line
      deleted: 0
    },
    attributes: { exclude: ['deleted', 'updatedAt', 'createdAt'] },
    include: [
      {
        model: Submenu,
        required: false,
        attributes: { exclude: ['id', 'name', 'icon', 'url', 'menu_id', 'deleted', 'updatedAt', 'createdAt'] }
      }
    ]
  })
  return rolesSubmenu
}

export default {
  getAllRolesSubmenusByRolId
}

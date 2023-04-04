import generateJWT from '#helpers/jwt.js'
import userServices from '#services/web/user.services.js'
import roles_submenuServices from '#services/web/roles_submenu.services.js' // eslint-disable-line

import { matchedData } from 'express-validator'
import { request, response } from 'express'
import bcrypt from 'bcrypt'

const login = async (req = request, res = response) => {
  const { user_name, password } = matchedData(req) // eslint-disable-line
  try {
    const responseUser = await userServices.getUserByUserName(user_name)
    if (!responseUser) {
      return res.status(400).json({
        state: false,
        msg: 'Usuario incorrecto'
      })
    }
    const passwordCompare = bcrypt.compareSync(password, responseUser.password)
    if (!passwordCompare) {
      return res.status(400).json({
        ok: false,
        msg: 'Usuario incorrecto'
      })
    }
    const { id, customer_id, rol_id } = responseUser.dataValues // eslint-disable-line
    const token = await generateJWT(id, customer_id, rol_id)
    const rolesSubmenu = await roles_submenuServices.getAllRolesSubmenusByRolId(responseUser.rol_id) // eslint-disable-line
    const pointReportPermissions = rolesSubmenu.flatMap((item) => {
      const permissions = []
      if (item.can_view) {
        permissions.push(`${item.Submenu.name_key}_can_view`)
      }
      if (item.can_create) {
        permissions.push(`${item.Submenu.name_key}_can_create`)
      }
      if (item.can_update) {
        permissions.push(`${item.Submenu.name_key}_can_update`)
      }
      if (item.can_delete) {
        permissions.push(`${item.Submenu.name_key}_can_delete`)
      }
      return permissions
    })
    res.json({
      state: true,
      rol_name: responseUser.Rol.name,
      rol_id: responseUser.rol_id,
      roles: pointReportPermissions,
      // namecustomer: (responseUser.Customer === undefined || responseUser.Customer === null) ? '' : responseUser.Customer.name, // + " " + respuestaUser.Customer.lastname,
      user: responseUser,
      token,
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
  login
}

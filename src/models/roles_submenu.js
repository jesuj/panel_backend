import { DataTypes } from 'sequelize'
import { sequelize } from '#config/db.js'
import { Rol, Submenu } from './index.js'

export const RolesSubmenu = sequelize.define(
  'RolesSubmenus',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    rol_id: {
      type: DataTypes.INTEGER
      // references: {
      //   model: Rol,
      //   key: 'id'
      // }
    },
    submenu_id: {
      type: DataTypes.INTEGER
      // references: {
      //   model: Submenu,
      //   key: 'id'
      // }
    },
    can_view: DataTypes.BOOLEAN,
    can_create: DataTypes.BOOLEAN,
    can_update: DataTypes.BOOLEAN,
    can_delete: DataTypes.BOOLEAN,
    deleted: {
      type: DataTypes.TINYINT(1),
      defaultValue: 0
    }
  }
)

// Submenu.belongsToMany(Rol, {
//   through: 'RolesSubmenus',
//   foreignKey: 'submenu_id',
//   otherKey: 'rol_id'
// })
// Rol.belongsToMany(Submenu, {
//   through: 'RolesSubmenus',
//   foreignKey: 'rol_id',
//   otherKey: 'submenu_id'
// })

Submenu.hasOne(RolesSubmenu, { foreignKey: 'submenu_id' })
RolesSubmenu.belongsTo(Submenu, { foreignKey: 'submenu_id' })

Rol.hasOne(RolesSubmenu, { foreignKey: 'rol_id' })
RolesSubmenu.belongsTo(Rol, { foreignKey: 'rol_id' })

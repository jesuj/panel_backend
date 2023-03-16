import { DataTypes } from 'sequelize'
import { sequelize } from '../config/db.js'
import { Rol } from './rol.js'
import { Submenu } from './submenu.js'

export const RolesSubmenu = sequelize.define(
  'RolesSubmenu',
  {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    rol_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Rol,
        key: 'id'
      }
    },
    submenu_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Submenu,
        key: 'id'
      }
    },
    deleted: {
      type: DataTypes.TINYINT(1),
      defaultValue: 0
    }
  }
)

Rol.belongsToMany(Submenu, { 
    through: 'RolesSubmenu',
    foreignKey: 'rol_id',
    otherKey: 'submenu_id'
})
Submenu.belongsToMany(Rol, { 
    through: 'RolesSubmenu',
    foreignKey: 'submenu_id',
    otherKey: 'rol_id'
})
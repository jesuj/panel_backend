import { DataTypes } from 'sequelize'
import { sequelize } from '../config/db.js'
import { Submenu } from './submenu.js'

export const Rol = sequelize.define(
  'Rol',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    deleted: {
      type: DataTypes.TINYINT(1),
      defaultValue: 0
    }
  }
)
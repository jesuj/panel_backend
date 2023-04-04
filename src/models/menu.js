import { DataTypes } from 'sequelize'
import { sequelize } from '#config/db.js'

export const Menu = sequelize.define(
  'Menu',
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
    prefix: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    icon: {
      type: DataTypes.STRING
    },
    deleted: {
      type: DataTypes.TINYINT(1),
      defaultValue: 0
    }
  }
)

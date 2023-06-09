import { DataTypes } from 'sequelize'
import { sequelize } from '#config/db.js'
import { Menu } from './index.js'

export const Submenu = sequelize.define(
  'Submenu',
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
    name_key: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false
    },
    icon: {
      type: DataTypes.STRING,
      allowNull: true
    },
    deleted: {
      type: DataTypes.TINYINT(1),
      defaultValue: 0
    },
    menu_id: {
      type: DataTypes.INTEGER
    }
  }
)

Menu.hasMany(Submenu, { foreignKey: 'menu_id' })
Submenu.belongsTo(Menu, { foreignKey: 'menu_id' })

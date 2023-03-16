import { DataTypes } from 'sequelize'
import { sequelize } from '../config/db.js'

export const Customer = sequelize.define(
  'Customer',
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
    lastname_father: DataTypes.STRING(50),
    lastname_mother: DataTypes.STRING(50),
    ci: DataTypes.STRING(50),
    birthdate: DataTypes.DATEONLY,
    cellphone: DataTypes.STRING(50),
    photo_url: DataTypes.STRING,
    deleted: {
      type: DataTypes.TINYINT(1),
      defaultValue: 0
    }
  }
)

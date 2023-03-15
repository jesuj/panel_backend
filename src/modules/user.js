import { DataTypes } from 'sequelize'
import { sequelize } from '../config/db.js'

export const User = sequelize.define('User', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  user_name: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  password: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(20),
    allowNull: true
  },
  active: {
    type: DataTypes.STRING(20),
    allowNull: true
  },
  pin: {
    type: DataTypes.STRING(20),
    allowNull: true
  },
  token: {
    type: DataTypes.STRING(20),
    allowNull: true
  }
})

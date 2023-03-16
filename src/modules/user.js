import { DataTypes } from 'sequelize'
import { sequelize } from '../config/db.js'
import { Customer } from './customer.js'
import { Rol } from './rol.js'

export const User = sequelize.define(
  'User',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_name: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    email: DataTypes.STRING(50),
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: true
    },
    pin: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: true
    },
    token: DataTypes.TEXT,
    deleted: {
      type: DataTypes.TINYINT(1),
      defaultValue: 0
    },
    customer_id: {
      type: DataTypes.INTEGER
    },
    rol_id: {
      type: DataTypes.INTEGER
    }
  }
)

Customer.hasOne(User, { foreignKey: 'customer_id' })
User.belongsTo(Customer, { foreignKey: 'customer_id' })

Rol.hasMany(User, { foreignKey: 'rol_id' })
User.belongsTo(Rol, { foreignKey: 'rol_id' })

import Sequelize from 'sequelize'

// export const sequelize = new Sequelize(
//     process.env.DATABSE_NAME,
//     process.env.DATABSE_USER,
//     process.env.DATABASE_PASSWORD || '',
//     {
//         host: process.env.DATABASE_HOST,
//         host: +process.env.DATABSE_PORT,
//         dialect: process.env.DATABASE_DIALECT,
//         define: {
//             timestamps: true,
//         },
//         pool: {
//             max: 5,
//             min: 0,
//             acquire: 30000,
//             idle: 10000,
//         },
//         operatorAliases: false,
//     }
// )
export const sequelize = new Sequelize(
  process.env.DATABASE_URL,
  {
    define: {
      timestamps: true
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    operatorAliases: false
  }
)

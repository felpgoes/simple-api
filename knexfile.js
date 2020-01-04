require('dotenv').config()

module.exports = {
  client: 'pg',
  version: process.env.DATABASE_VERSION,
  connection: {
      host: process.env.DATABASE_HOST,
      user: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_ID
  },
  migrations: {
      directory: 'src/db/migrations'
  },
  seeds: {
      directory: 'src/db/seeds'
  }
}

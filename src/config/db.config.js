module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "",
  DB: "db_api_final",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  logging: console.log,
}

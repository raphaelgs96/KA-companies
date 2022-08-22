require("dotenv").config()

module.exports = {
    dialect: "postgres",
    protocol: "postgres",
    host: process.env.POSTGRES_HOST,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PWD,
    database: process.env.POSTGRES_DB,
    define: {
        timestamps: true,
        underscored: true,
    },
    dialectOptions: {
        ssl: { rejectUnauthorized: false }
    }
}
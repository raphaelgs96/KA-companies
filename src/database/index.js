import Company from "./models/company.js"
import Employees from "./models/employees.js"

import Sequelize from "sequelize"
import config from "./config"


const connection = new Sequelize(config)

Company.init(connection)
Employees.init(connection)

Company.associate(connection.models)
Employees.associate(connection.models)

export default connection
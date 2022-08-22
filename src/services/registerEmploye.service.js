import { v4 as uuidv4 } from "uuid"
import Employees from "../database/models/employees.js"

const registerEmployeesService = async (name, department, company_id) => {
    const registerEmploy = await Employees.create({
        name,
        department,
        company_id,
        id: uuidv4()
    })

    return registerEmploy
}

export default registerEmployeesService
import { v4 as uuidv4 } from "uuid"
import * as bcrypt from "bcryptjs"

import Company from "../database/models/company.js"

const createCompanyService = async (company_name, email, password, city) => {
    const hashedPassword = await bcrypt.hash(password, 10)

    const createCompany = await Company.create({
        company_name,
        email,
        city,
        password: hashedPassword,
        id: uuidv4()
    })

    return createCompany
}

export default createCompanyService
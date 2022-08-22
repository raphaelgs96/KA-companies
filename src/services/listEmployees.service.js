import Company from "../database/models/company"

const listEmployeesService = company_id => {
    const employees = Company.findByPk(company_id, {
        include: { association: "employees" }
    })

    return employees
}

export default listEmployeesService
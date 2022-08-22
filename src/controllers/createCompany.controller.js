import createCompanyService from "../services/createCompany.service"

const createCompanyController = async (request, response) => {
    const { company_name, email, password, city } = request.body

    const company = await createCompanyService(company_name, email, password, city)

    return response.json(company)
}

export default createCompanyController
import listEmployeesService from "../services/listEmployees.service"

const listEmployeesController = async (request, response) => {
    const { company_id } = request.params
    
    const company = await listEmployeesService(company_id)

    return response.json(company.employees)
}

export default listEmployeesController
import registerEmployeesService from "../services/registerEmploye.service.js"

const registerEmployeesController = async (request, response) => {
    const { name, department } = request.body
    const { company_id } = request.params

    const employ =  await registerEmployeesService(name, department, company_id)

    return response.json(employ)
}

export default registerEmployeesController
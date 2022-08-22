import listCompaniesByCityService from "../services/listCompaniesByCity.service"

const listCompaniesByCityController = async (request, response) => {
    const { city } = request.params
    
    return response.json(await listCompaniesByCityService(city))
}

export default listCompaniesByCityController
import listCompaniesService from "../services/listCompanies.service"

const listCompaniesController = async (_, response) => {
    const companies = await listCompaniesService()

    return response.json(companies)
}

export default listCompaniesController
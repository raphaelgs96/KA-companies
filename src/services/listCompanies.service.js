import Company from "../database/models/company.js"

const listCompaniesService = () => {
    return Company.findAll({ attributes: {exclude: ['password']} })
}

export default listCompaniesService
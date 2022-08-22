import Company from "../database/models/company"

const listCompaniesByCityService = city => {
    return Company.findAll({ where: { city }})
    .then(res => res)
}

export default listCompaniesByCityService
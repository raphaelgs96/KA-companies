import Company from "../database/models/company"

const verifyCompanyIdMiddleware = async (request, response, next) => {
    const { company_id } = request.params

    await Company.findByPk(company_id)
    .then(() => next())
    .catch(() => response
        .status(404)
        .json({ error: "Company not found." })
    )
}

export default verifyCompanyIdMiddleware
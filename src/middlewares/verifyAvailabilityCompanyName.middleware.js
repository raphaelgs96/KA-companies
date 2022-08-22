import Company from "../database/models/company"

const verifyCompanyNameAvailabilityMiddleware = async (request, response, next) => {
    const { company_name } = request.body
    
    if (!company_name){
        return response
        .status(400)
        .json({ error: "company_name is required" })
    }
    
    await Company.findOne({ where: { company_name: company_name } })
    .then(res => {
        if(res){
            return response
            .status(400)
            .json({ error: "This company_name is already being used" })
        } else {
            next()
        }
    })
}

export default verifyCompanyNameAvailabilityMiddleware
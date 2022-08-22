import Company from "../database/models/company"

const verifyEmailAvailabilityMiddleware = async (request, response, next) => {
    const { email, password, city } = request.body
    
    if (!email){
        return response
        .status(400)
        .json({ error: "email is required" })
    } else if (!password) {
        return response
        .status(400)
        .json({ error: "password is required" })
    } else if(!city) {
        return response
        .status(400)
        .json({ error: "city is required" })
    }

    
    await Company.findOne({ where: { email: email } })
    .then(res => {
        if(res){
            return response
            .status(400)
            .json({ error: "This email address is already being used" })
        } else {
            next()
        }
    })
}

export default verifyEmailAvailabilityMiddleware
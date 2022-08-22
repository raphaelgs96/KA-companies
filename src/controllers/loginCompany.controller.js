import loginService from "../services/login.service"

const loginCompanyController = async (request, response) => {
    const { email, password } = request.body

    const company = await loginService(email, password)
    if(company) {
        return response.json(company)
    } else {
        return response
        .status(401)
        .json({ error: "email and password dont match" })
    }
}

export default loginCompanyController
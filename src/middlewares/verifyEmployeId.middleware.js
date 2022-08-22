import Employees from "../database/models/employees"
import jwt from "jsonwebtoken";

const verifyEmployeIdMiddleware = async (request, response, next) => {
    const { employe_id } = request.params

    const token = request.headers.authorization
    const splitedToken = token.split(" ")[1]
    let company_id = null

    jwt.verify(splitedToken, "SECRET_KEY", (_, decoded) => {
        company_id = decoded.id
    })

    await Employees.findByPk(employe_id)
    .then(res => {
        if(res && res.company_id === company_id){
            next()
        } else {
            return response
            .status(404)
            .json({ error: "Employe not found." })
        }
    })
}

export default verifyEmployeIdMiddleware
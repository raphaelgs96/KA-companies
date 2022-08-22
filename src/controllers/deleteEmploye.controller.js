import deleteEmployeService from "../services/deleteEmploye.service"
import jwt from "jsonwebtoken";

const deleteEmployeController = async (request, response) => {
    const token = request.headers.authorization
    const splitedToken = token.split(" ")[1]
    let company_id = null

    jwt.verify(splitedToken, "SECRET_KEY", (_, decoded) => {
        company_id = decoded.id
    })

    const { employe_id } = request.params
    if( await deleteEmployeService(employe_id, company_id) ){
        return response.json()
    } else {
        return response.status(401).json({ message: "Invalid Token." })
    }
}

export default deleteEmployeController
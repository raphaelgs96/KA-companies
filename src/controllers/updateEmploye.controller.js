import jwt from "jsonwebtoken";
import updateEmployeService from "../services/updateEmploye.service";

const updateEmployeController = async (request, response) => {
    const { name, department } = request.body
    const { employe_id } = request.params

    const token = request.headers.authorization

    const splitedToken = token.split(" ")[1]

    let company_id = null

    jwt.verify(splitedToken, "SECRET_KEY", (_, decoded) => {
        company_id = decoded.id
    })

    const updated_employ = await updateEmployeService(employe_id, company_id, name, department)

    if(updated_employ) {
        return response.json(updated_employ)
    } else {
        return response.status(401).json({ message: "Invalid Token." })
    }
    
}

export default updateEmployeController
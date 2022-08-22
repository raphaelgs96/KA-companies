import Company from "../database/models/company";
import jwt from "jsonwebtoken";
import * as bcrypt from "bcryptjs";

const loginService = (email, password) => {
    return Company.findOne({ where: { email: email } })
        .then(res => {
            if(res && bcrypt.compareSync(password, res.password)) {
                return {
                    company_name: res.company_name,
                    email: res.email,
                    company_id: res.id,
                    token : jwt.sign({ email: email, id: res.id }, "SECRET_KEY", { expiresIn: "24h" })
                }
            } else {
                return false
            }
        })
}

export default loginService
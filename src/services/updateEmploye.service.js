import Employees from "../database/models/employees"

const updateEmployeService = (employe_id, company_id, name, department) => {
    return Employees.findOne({ where: { id: employe_id, company_id: company_id } })
    .then(res => {
        if(res && res.company_id === company_id) {
            return res.update({name, department}, { where: { id: employe_id, company_id: company_id } })
        } else {
            return false
        }
    })
    
}

export default updateEmployeService
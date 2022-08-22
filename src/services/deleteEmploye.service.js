import Employees from "../database/models/employees"

const deleteEmployeService = (employe_id, company_id) => {
    return Employees.findOne({ where: { id: employe_id, company_id: company_id } })
    .then(res => {
        console.log(res.company_id, company_id)
        if(res && res.company_id === company_id){
            res.destroy()
            return true
        } else {
            return false
        }
    })
}

export default deleteEmployeService
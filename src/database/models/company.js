import { Model, DataTypes }  from "sequelize"

class Company extends Model {
    static init(sequelize) {
        super.init({
            company_name: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            city: DataTypes.STRING
        }, {
            sequelize
        })
    }
    
    static associate(models){
        this.hasMany(models.Employees, { foreignKey: "company_id", as: "employees" })
    }
}

export default Company
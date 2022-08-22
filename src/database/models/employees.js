import { Model, DataTypes }  from "sequelize"

class Employees extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            department: DataTypes.STRING,
            company_id: DataTypes.UUIDV4
        }, {
            sequelize
        })
    }

    static associate(models){
        this.belongsTo(models.Company, { foreignKey: 'company_id', as:'work_at' })
    }
}

export default Employees
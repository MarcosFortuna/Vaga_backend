const {Model, DataTypes} = require('sequelize')

class User extends Model {

    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            lastName: DataTypes.STRING,
            email: DataTypes.STRING,
            userName: DataTypes.STRING,
            
        },{
            sequelize
        }
        )
    }

    static associate(models){
        this.belongsTo(models.Roles, {foreignKey:'roleId', as: 'Role'})
    }
}

module.exports = User
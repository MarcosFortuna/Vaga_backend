const {Model, DataTypes} = require('sequelize')

class Roles extends Model {

    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            description: DataTypes.STRING,
            status: DataTypes.STRING
        },{
            sequelize
        }
        )
    }

    static associate(models){
        this.hasMany(models.User, {foreignKey: 'roleId', as: 'owner'})
    }
}

module.exports = Roles
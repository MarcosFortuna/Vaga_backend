


import { Model, DataTypes } from 'sequelize'
import connection from '../database'
import Roles from './Roles'


 const User = connection.define('users',{
    id:{
        type:DataTypes.INTEGER,
        allowNull: false,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type: DataTypes.STRING,
        allowNull:false
    },
    lastName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    userName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    roleId:{
        type: DataTypes.INTEGER,
        references:{
            model:"roles",
            key:"id"
        }
    }
})
User.belongsTo(Roles,{
    foreignKey: "roleId",
    as:"Role"
})

export default User
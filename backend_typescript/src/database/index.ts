import {Sequelize} from 'sequelize'


//import User from '../models/User'
//import {Roles} from '../models/Roles'


const connection = new Sequelize({
    dialect: "mysql",
    host: 'localhost',
    username: 'root',
    password: '123456',
    database: 'backend',
    define: {
        timestamps: true,
        underscored: true,
    }
})

//User.init(connection)
//Roles.init(connection)

//Roles.associate(connection.models)
//User.associate(connection.models)

export default connection
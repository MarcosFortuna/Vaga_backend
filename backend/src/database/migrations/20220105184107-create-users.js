'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     return queryInterface.createTable('users', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        last_name:{
          type: Sequelize.STRING,
          allowNull: false
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false
        },
        user_name:{
          type: Sequelize.STRING,
          allowNull: false
        },
        created_at:{
          type: Sequelize.DATE,
          allowNull: false
        },
        updated_at:{
          type: Sequelize.DATE,
          allowNull: false
        },
        role_id:{
          type: Sequelize.INTEGER,
          allowNull: false,
          references:{
            model: 'roles',
            key: 'id'
          },
          onUpdate: 'CASCADE',//refletir alteração no relacionamento
          onDelete: 'CASCADE'
        }

      });
     
  },

  down: async (queryInterface, Sequelize) => {
     return queryInterface.dropTable('users');
     
  }
};

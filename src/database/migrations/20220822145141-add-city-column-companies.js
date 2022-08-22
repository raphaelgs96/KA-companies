'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.addColumn('companies', 'city', {
      type: Sequelize.STRING,
      allowNull: false 
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('companies', 'city');
    
  }
};

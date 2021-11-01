module.exports = {
    up: (queryInterface, Sequelize) =>
      queryInterface.createTable('Barangays', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        barangay: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        cityId : {
            type : Sequelize.INTEGER,
            onDelete : 'CASCADE',
            references : {
                model : 'Cities',
                key : 'id',
                as : 'cityId'
            },
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      }),
    down: (queryInterface /* , Sequelize */) => queryInterface.dropTable('Barangays'),
  };
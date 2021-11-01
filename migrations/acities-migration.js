module.exports = {
    up: (queryInterface, Sequelize) =>
      queryInterface.createTable('Cities', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        city: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        provinceId : {
            type : Sequelize.INTEGER,
            onDelete : 'CASCADE',
            references : {
                model : 'Provinces',
                key : 'id',
                as : 'provinceId'
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
    down: (queryInterface /* , Sequelize */) => queryInterface.dropTable('Cities'),
  };
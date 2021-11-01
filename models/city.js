module.exports = (sequelize,DataTypes) => {
    let City = sequelize.define('City',{
        city : DataTypes.STRING
    });

    City.associate = function (models) {
        City.belongsTo(models.Province,{
            onDelete : "CASCADE",
            foreignKey : 'provinceId'
        });
    };

    return City;
}
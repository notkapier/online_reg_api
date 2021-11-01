module.exports = (sequelize,DataTypes) => {
    let Barangay = sequelize.define('Barangay',{
        barangay : DataTypes.STRING
    });

    Barangay.associate = function (models) {
        Barangay.belongsTo(models.City,{
            onDelete : "CASCADE",
            foreignKey : 'cityId'
        });
    };

    return Barangay;
}
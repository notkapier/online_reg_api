module.exports = (sequelize,DataTypes) => {
    let Province = sequelize.define('Province',{
        province : DataTypes.STRING
    });

    return Province;
}
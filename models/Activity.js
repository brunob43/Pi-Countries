const {DataTypes} = require ("sequelize");

module.exports = (sequelize) => {

sequelize.define(
    "activity", 
{
    name: {
        type:DataTypes.STRING,
        allowNull: true,
        unique: true
    },
    dificult:{
        type: DataTypes.ENUM("1","2","3","4","5"),
    },
    duration:{
        type: DataTypes.INTEGER,
    },
    season:{
        type: DataTypes.ENUM("Verano","Otoño","Invierno","Primavera")
    },
    
}
    );
};

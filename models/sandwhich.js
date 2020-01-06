module.exports = function(sequelize, DataTypes) {
    var sandwhiches = sequelize.define("sandwhiches", {
      name: {type: DataTypes.STRING, allowNull: false},
      devoured:{type: DataTypes.BOOLEAN, defaultValue: false}
    });
    return sandwhiches;
  };
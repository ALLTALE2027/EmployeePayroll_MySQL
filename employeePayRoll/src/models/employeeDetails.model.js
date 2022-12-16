'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  employee.init(
    {
      employeeID: DataTypes.INTEGER,
      employeeName: DataTypes.STRING,
      employeeEmail: DataTypes.STRING,
      employeeMobile: DataTypes.STRING,
      employeeAddress: DataTypes.STRING,
      gender: DataTypes.CHAR,
      companyName: DataTypes.STRING,
      startDate: { type: DataTypes.DATEONLY, defaultValue: DataTypes.NOW },
      basicPay: DataTypes.BIGINT
    },
    {
      sequelize,
      modelName: 'employeedetail'
    }
  );
  return employee;
};

import sequelize, { DataTypes } from '../config/database';
const Employee = require('../models/employeeDetails.model')(
  sequelize,
  DataTypes
);
const User = require('../models/user')(sequelize, DataTypes);
const { Op } = require('sequelize');

//add employee details
export const newEmployee = async (body, userEmail) => {
  const user = await User.findOne({ where: { email: userEmail } });
  if (user) {
    body.employeeEmail = userEmail;
    const data = await Employee.create(body);
    return data;
  } else {
    throw Error('Please signup first,then add details');
  }
};

//get first 5 records from database
export const getLimitedRecords = async () => {
  const data = await Employee.findAll({ limit: 5 });
  return data;
};

//get records based on salary filter
export const filterSalary = async (salary) => {
  const data = await Employee.findAll({
    where: {
      basicPay: { [Op.gt]: salary }
    }
  });
  return data;
};

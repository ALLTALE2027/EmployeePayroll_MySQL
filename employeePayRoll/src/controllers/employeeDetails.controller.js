import HttpStatus from 'http-status-codes';
import * as EmployeeService from '../services/employee.service';

/**
 * Controller to create a new user
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const newEmployee = async (req, res, next) => {
  try {
    const data = await EmployeeService.newEmployee(
      req.body,
      req.body.userEmail
    );
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'Employee details added successfully'
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
    });
  }
};

/**
 * Controller to get first five records from table
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getLimitedRecords = async (req, res, next) => {
  try {
    const data = await EmployeeService.getLimitedRecords();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'First five records fetched successfully'
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
    });
  }
};

/**
 * Controller to get records on salary filter
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const filterSalary = async (req, res, next) => {
  try {
    const data = await EmployeeService.filterSalary(req.params.salary);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Records based on salary filter fetched successfully'
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
    });
  }
};

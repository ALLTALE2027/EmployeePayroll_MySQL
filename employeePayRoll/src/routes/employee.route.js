import express from 'express';
import { userAuth } from '../middlewares/auth.middleware';
import * as employeeController from '../controllers/employeeDetails.controller';
import user from '../models/user';
const router = express.Router();

//route to add employee details once onboarded
router.post('/add', userAuth, employeeController.newEmployee);

//route to get first records
router.get('/first5', userAuth, employeeController.getLimitedRecords);

//route to get records having salary > x amount
router.get('/salaryfilter/:salary', userAuth, employeeController.filterSalary);

export default router;

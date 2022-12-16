import express from 'express';
import * as userController from '../controllers/user.controller';
import { newUserValidator, loginValidator } from '../validators/user.validator';
import { userAuth } from '../middlewares/auth.middleware';
import * as employeeController from '../controllers/employeeDetails.controller';
const router = express.Router();

//route to get all users
router.get('', userController.getAllUsers);

//route to create a new user
router.post('', newUserValidator, userController.newUser);

//route to get a single user by their user id
router.get('/:id', userAuth, userController.getUser);

//route to update a single user by their user id
router.put('/:id', userController.updateUser);

//route to delete a single user by their user id
router.delete('/:id', userController.deleteUser);

//user login
router.post('/login', loginValidator, userController.login);

export default router;

// Import express and the UserController
import express from "express";
import UserController from "./user.controller.js";

// Create a router instance
const UserRouter = express.Router();

// Create an instance of UserController
const userController = new UserController();

// Define routes for user-related operations

/**
 * Route for signing up a new user
 * Method: POST
 * Endpoint: /signup
 * Controller method: signUp
 */
UserRouter.post('/signup', userController.signUp);

/**
 * Route for signing in an existing user
 * Method: POST
 * Endpoint: /signin
 * Controller method: signIn
 */
UserRouter.post('/signin', userController.signIn);

// Export the router
export default UserRouter;

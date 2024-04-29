// Import express and the LikeController
import express from "express";
import LikeController from "./like.controller.js";

// Create a router instance
const LikeRouter = express.Router();

// Create an instance of LikeController
const likeController = new LikeController();

// Define routes for like-related operations

/**
 * Route to retrieve all likes for a specific post.
 * Method: GET
 * Endpoint: /likes/:postId
 * Controller method: getAllPostLikes
 */
LikeRouter.get('/:postId', likeController.getAllPostLikes);

/**
 * Route to toggle the like status for a specific post.
 * Method: GET
 * Endpoint: /likes/toggle/:postId
 * Controller method: togglePostLikeStatus
 */
LikeRouter.get('/toggle/:postId', likeController.togglePostLikeStatus);

// Export the router
export default LikeRouter;

import express from "express";
import CommentController from "./comment.controller.js";

// Create a router instance
const CommentRouter = express.Router();

// Create an instance of CommentController
const commentController = new CommentController();

// Define routes for comment-related operations

/**
 * Route for retrieving comments for a specific post.
 * Method: GET
 * Endpoint: /:id
 * Controller method: getPostComments
 */
CommentRouter.get('/:id', commentController.getPostComments);

/**
 * Route for adding a new comment to a post.
 * Method: POST
 * Endpoint: /:id
 * Controller method: addNewComment
 */
CommentRouter.post('/:id', commentController.addNewComment);

/**
 * Route for updating an existing comment.
 * Method: PUT
 * Endpoint: /:id
 * Controller method: updateComment
 */
CommentRouter.put('/:id', commentController.updateComment);

/**
 * Route for deleting a comment from a post.
 * Method: DELETE
 * Endpoint: /:id
 * Controller method: deleteComment
 */
CommentRouter.delete('/:id', commentController.deleteComment);

// Export the router
export default CommentRouter;

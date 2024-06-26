// Import express and the PostController
import express from "express";
import PostController from "./post.controller.js";
import { upload } from "../../middlewares/fileUpload.middleware.js";

// Create a router instance
const PostRouter = express.Router();
const postController = new PostController();

// Define routes for post-related operations

/**
 * Route: Get all posts
 * Method: GET
 * Endpoint: /all
 * Controller method: getAllPosts
 */
PostRouter.get('/all', postController.getAllPosts);

/**
 * Route: Filter post by Caption
 * Method: GET
 * Endpoint: /filteredPost
 * Controller method: filterPostsByCaption
 */
PostRouter.get('/filteredPost', postController.filterPostsByCaption);

/**
 * Route: BookMark a post by ID
 * Method: POST
 * Endpoint: /bookmarkPost/:id
 * Controller method: bookmarkPost
 */
PostRouter.post('/bookmarkPost/:id', postController.bookmarkPost);

/**
 * Route: Save a post by ID
 * Method: POST
 * Endpoint: /savePost/:id
 * Controller method: savePost
 */
PostRouter.post('/savePost/:id', postController.savePost);

/**
 * Route: Archive a post by ID
 * Method: POST
 * Endpoint: /archivePost/:id
 * Controller method: archivePost
 */
PostRouter.post('/archivePost/:id', postController.archivePost);

/**
 * Route: Get a single post by ID
 * Method: GET
 * Endpoint: /:id
 * Controller method: getOnePost
 */
PostRouter.get('/:id', postController.getOnePost);

/**
 * Route: Delete a post by ID
 * Method: DELETE
 * Endpoint: /:id
 * Controller method: deletePost
 */
PostRouter.delete('/:id', postController.deletePost);

/**
 * Route: Get posts by user ID
 * Method: GET
 * Endpoint: /
 * Controller method: getUserPost
 */
PostRouter.get('/', postController.getUserPosts);

/**
 * Route: Add a new post
 * Method: POST
 * Endpoint: /
 * Middleware: upload.single('imageUrl')
 * Controller method: addNewPost
 */
PostRouter.post('/', upload.single('imageUrl'), postController.addNewPost);

/**
 * Route: Update an existing post
 * Method: PUT
 * Endpoint: /
 * Middleware: upload.single('imageUrl')
 * Controller method: updatePost
 */
PostRouter.put('/', upload.single('imageUrl'), postController.updatePost);




// Export the router
export default PostRouter;

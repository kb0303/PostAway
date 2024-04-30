import PostModel from "./post.model.js";

export default class PostController {
	/**
	 * Get all posts
	 * @param {Object} req - The request object
	 * @param {Object} res - The response object
	 */
	getAllPosts(req, res) {
		try {
			// Get all posts from the model
			const posts = PostModel.getAll();
			// Return the response with success status and posts data
			res.status(200).json({ success: true, posts });
		} catch (error) {
			// Return error if something goes wrong
			res.status(500).json({ success: false, message: "Internal server error" });
		}
	}

	/**
	 * Get a single post by ID
	 * @param {Object} req - The request object
	 * @param {Object} res - The response object
	 */
	getOnePost(req, res) {
		try {
			// Extract post ID from request parameters
			const id = req.params.id;
			// Get the post by ID from the model
			const post = PostModel.getOne(id);
			// Return the response with success status and post data
			res.status(200).json({ success: true, post: post });
		} catch (error) {
			// Return error if something goes wrong
			res.status(500).json({ success: false, message: "Internal server error" });
		}
	}

	/**
	 * Get posts by user ID
	 * @param {Object} req - The request object
	 * @param {Object} res - The response object
	 */
	getUserPosts(req, res) {
		try {
			// Extract user ID from request
			const userId = req.userId;
			// Get user's posts from the model
			const userPosts = PostModel.getUserPosts(userId);
			// Return the response with success status and user's posts data
			res.status(200).json({ success: true, userPosts });
		} catch (error) {
			// Return error if something goes wrong
			res.status(500).json({ success: false, message: "Internal server error" });
		}
	}

	/**
	 * Add a new post
	 * @param {Object} req - The request object
	 * @param {Object} res - The response object
	 */
	addNewPost(req, res) {
		try {
			// Extract user ID, caption, and image URL from request
			const userId = req.userId;
			const caption = req.body.caption;
			const imageUrl = req.file.filename;

			// Create a new post object
			const newPost = { userId, caption, imageUrl };

			// Add the new post to the model
			PostModel.addPost(newPost);

			// Get user's posts
			const userPosts = PostModel.getUserPosts(userId);
			// Return the response with success status and user's posts data
			res.status(201).json({ success: true, message: "Post added successfully", userPosts });
		} catch (error) {
			// Return error if something goes wrong
			res.status(500).json({ success: false, message: "Internal server error" });
		}
	}

	/**
	 * Update an existing post
	 * @param {Object} req - The request object
	 * @param {Object} res - The response object
	 */
	updatePost(req, res) {
		try {
			// Extract post ID, caption, and image URL from request
			const { postId, caption } = req.body;
			const imageUrl = req.file.filename;

			// Update the post in the model
			const updatedPost = PostModel.updatePost(postId, caption, imageUrl);
			// Return the response with success status and updated post data
			res.status(200).json({ success: true, message: "Post updated successfully", updatedPost });
		} catch (error) {
			// Return error if something goes wrong
			res.status(500).json({ success: false, message: "Internal server error" });
		}
	}

	/**
	 * Delete a post by ID
	 * @param {Object} req - The request object
	 * @param {Object} res - The response object
	 */
	deletePost(req, res) {
		try {
			// Extract user ID and post ID from request
			const id = req.params.id;
			const userId = req.userId;

			// Delete the post in the model
			PostModel.deletePost(id, userId);
			// Return the response with success status
			res.status(200).json({ success: true, message: "Post deleted successfully" });
		} catch (error) {
			// Return error if something goes wrong
			res.status(500).json({ success: false, message: "Internal server error" });
		}
	}

	filterPostsByCaption(req, res) {
		try {
			const caption = req.query.caption;

			const filteredPost = PostModel.filterPostsByCaption(caption);

			res.status(200).json({ success: true, filteredPost });
		} catch (error) {
			res.status(500).json({ success: false, message: "Internal server error" });
		}
	}
	bookmarkPost(req, res) {
		try {
			const userId = req.userId;
			const postId = req.params.id;

			const bookMarkStatus = PostModel.bookmarkPost(userId, postId);

			res.status(200).json({ success: true, bookMarkStatus })
		} catch (error) {
			res.status(500).json({ success: false, message: "Internal server error" });
		}
	}
	savePost(req, res) {
		try {
			const userId = req.userId;
			const postId = req.params.id;

			const saveStatus = PostModel.savePost(userId, postId);

			res.status(200).json({ success: true, saveStatus })
		} catch (error) {
			res.status(500).json({ success: false, message: "Internal server error" });
		}
	}
	archivePost(req, res) {
		try {
			const userId = req.userId;
			const postId = req.params.id;

			const archiveStatus = PostModel.archivePost(userId, postId);

			res.status(200).json({ success: true, archiveStatus })
		} catch (error) {
			res.status(500).json({ success: false, message: "Internal server error" });
		}
	}
}

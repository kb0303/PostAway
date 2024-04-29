import CommentModel from "./comment.model.js";

export default class CommentController {
	/**
	 * Retrieve comments for a specific post.
	 * @param {Object} req - The request object.
	 * @param {Object} res - The response object.
	 */
	getPostComments(req, res) {
		try {
			// Extract post ID and user ID from request
			const postId = req.params.id;
			const userId = req.userId;

			// Get comments for the post
			const postComments = CommentModel.getPostComments(userId, postId);

			// Check if there are comments
			if (postComments.length <= 0) {
				// No comments found
				res.status(404).send("Post comment not found");
			} else {
				// Send comments if found
				res.status(200).send(postComments);
			}
		} catch (error) {
			// Handle any errors
			res.status(500).send({ success: false, message: "Internal server error" });
		}
	}

	/**
	 * Add a new comment to a post.
	 * @param {Object} req - The request object.
	 * @param {Object} res - The response object.
	 */
	addNewComment(req, res) {
		try {
			// Extract user ID, post ID, and comment from request
			const userId = req.userId;
			const postId = parseInt(req.params.id);
			const comment = req.query.comment;

			// Add the comment to the post
			CommentModel.addPostComment(userId, postId, comment);

			// Get comments for the post
			const postComments = CommentModel.getPostComments(userId, postId);

			// Send updated comments
			res.status(200).send({ success: true, comments: postComments });
		} catch (error) {
			// Handle any errors
			res.status(500).send({ success: false, message: "Internal server error" });
		}
	}

	/**
	 * Update an existing comment.
	 * @param {Object} req - The request object.
	 * @param {Object} res - The response object.
	 */
	updateComment(req, res) {
		try {
			// Extract user ID, post ID, comment ID, and new comment text from request
			const userId = req.userId;
			const postId = req.params.id;
			const { commentId, comment } = req.query;

			// Update the comment
			const updatedComment = CommentModel.update(commentId, userId, postId, comment);

			// Send updated comment
			res.status(200).send({ success: true, updatedComment });
		} catch (error) {
			// Handle any errors
			res.status(500).send({ success: false, message: "Internal server error" });
		}
	}

	/**
	 * Delete a comment from a post.
	 * @param {Object} req - The request object.
	 * @param {Object} res - The response object.
	 */
	deleteComment(req, res) {
		try {
			// Extract comment ID, user ID, and post ID from request
			const commentId = req.query.commentId;
			const userId = req.userId;
			const postId = req.params.id;

			// Delete the comment
			const deleteMessage = CommentModel.delete(commentId, userId, postId);

			// Send success message
			res.status(200).send({ success: true, message: deleteMessage });
		} catch (error) {
			// Handle any errors
			res.status(500).send({ success: false, message: "Internal server error" });
		}
	}
}

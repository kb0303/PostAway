export default class CommentModel {
	constructor(id, userId, postId, comment) {
		this.id = id;
		this.userId = userId;
		this.postId = postId;
		this.comment = comment;
	}

	/**
	 * Get comments for a specific post by userId and postId
	 * @param {number} userId - The ID of the user
	 * @param {number} postId - The ID of the post
	 * @returns {Array} - An array of comments
	 */
	static getPostComments(userId, postId) {
		// Filter comments based on userId and postId
		const postComments = comments.filter(p => p.userId == userId && p.postId == postId);
		// If no comments found, return message
		if (!postComments.length) {
			return "No comments on the post";
		} else {
			return postComments;
		}
	}

	/**
	 * Add a comment to a post
	 * @param {number} userId - The ID of the user
	 * @param {number} postId - The ID of the post
	 * @param {string} comment - The comment text
	 * @returns {Object} - The newly created comment object
	 */
	static addPostComment(userId, postId, comment) {
		// Generate a new comment ID
		const id = comments.length + 1;
		// Create a new CommentModel instance
		const newComment = new CommentModel(id, userId, postId, comment);
		// Add the new comment to the comments array
		comments.push(newComment);
		// Return the new comment
		return newComment;
	}

	/**
	 * Update a comment
	 * @param {number} commentId - The ID of the comment to be updated
	 * @param {number} userId - The ID of the user who owns the comment
	 * @param {number} postId - The ID of the post the comment belongs to
	 * @param {string} comment - The updated comment text
	 * @returns {Object|string} - The updated comment object or error message
	 */
	static update(commentId, userId, postId, comment) {
		// Find the comment to be updated
		const updatedComment = comments.find(c => c.userId == userId && c.postId == postId && c.id == commentId);
		// If no comment found, return error message
		if (!updatedComment) {
			return "Comment not found";
		} else {
			// Update the comment text
			updatedComment.comment = comment;
			// Return the updated comment
			return updatedComment;
		}
	}

	/**
	 * Delete a comment
	 * @param {number} commentId - The ID of the comment to be deleted
	 * @param {number} userId - The ID of the user who owns the comment
	 * @param {number} postId - The ID of the post the comment belongs to
	 * @returns {string|Array} - Success message or error message
	 */
	static delete(commentId, userId, postId) {
		// Find the index of the comment to be deleted
		const commentIndex = comments.findIndex(c => c.id == commentId && c.userId == userId && c.postId == postId);
		// If comment not found, return error message
		if (commentIndex == -1) {
			return "Comment not found";
		} else {
			// Remove the comment from the comments array
			comments.splice(commentIndex, 1);
			return "Comment has been deleted from the post"
		}
	}
}

// Initial comments data
var comments = [
	new CommentModel(1, 1, 1, 'Congo')
];

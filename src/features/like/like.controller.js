import LikeModel from "./like.model.js";

export default class LikeController {
	/**
	 * Retrieve all likes for a specific post.
	 * @param {Object} req - The request object.
	 * @param {Object} res - The response object.
	 */
	getAllPostLikes(req, res) {
		try {
			// Extract post ID from request
			const postId = req.params.postId;

			// Get all likes for the post
			const postLikes = LikeModel.getAllLikes(postId);

			// Send response
			res.status(200).send({ success: true, likes: postLikes });
		} catch (error) {
			res.status(500).send({ success: false, error: error.message });
		}
	}

	/**
	 * Toggle the like status of a post for a user.
	 * @param {Object} req - The request object.
	 * @param {Object} res - The response object.
	 */
	togglePostLikeStatus(req, res) {
		try {
			// Extract user ID and post ID from request
			const userId = req.userId;
			const postId = req.params.postId;

			// Toggle like status
			const likeStatusMessage = LikeModel.togglePostLikeStatus(userId, postId);

			// Send response
			res.status(200).send({ success: true, message: likeStatusMessage });
		} catch (error) {
			res.status(500).send({ success: false, error: error.message });
		}
	}
}

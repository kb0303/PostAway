/**
 * Class representing a post model
 */
export default class PostModel {
	/**
	 * Constructor for PostModel
	 * @param {number} id - The ID of the post
	 * @param {number} userId - The ID of the user who created the post
	 * @param {string} caption - The caption of the post
	 * @param {string} imageUrl - The URL of the image associated with the post
	 */
	constructor(id, userId, caption, imageUrl) {
		this.id = id;
		this.userId = userId;
		this.caption = caption;
		this.imageUrl = imageUrl;
	}

	/**
	 * Static method to get all posts
	 * @returns {Object[]} - Array of all posts
	 */
	static getAll() {
		// Returning a copy of posts array to prevent direct modification
		return posts.slice();
	}

	/**
	 * Static method to get a single post by ID
	 * @param {number} id - The ID of the post to retrieve
	 * @returns {Object|string} - The post object if found, otherwise an error message
	 */
	static getOne(id) {
		// Find the post with the specified ID
		const post = posts.find(p => p.id == id);
		// Return the post if found, otherwise return an error message
		if (!post) {
			return 'Post Not Found'
		} else {
			return post;
		}
	}

	/**
	 * Static method to get all posts by a specific user
	 * @param {number} userId - The ID of the user
	 * @returns {Object[]|string} - Array of posts by the user, otherwise an error message
	 */
	static getUserPosts(userId) {
		// Filter posts by the specified user ID
		const userPosts = posts.filter(p => p.userId == userId);
		// Return userPosts if found, otherwise return an error message
		return userPosts.length > 0 ? userPosts : 'No user posts found, create your first post';
	}

	/**
	 * Static method to add a new post
	 * @param {Object} newPost - The new post object to add
	 * @returns {Object} - The newly added post
	 */
	static addPost(newPost) {
		// Generate a new ID for the post
		newPost.id = posts.length + 1;
		// Add the new post to the posts array
		posts.push(newPost);
		// Return the newly added post
		return newPost;
	}

	/**
	 * Static method to update an existing post
	 * @param {number} postId - The ID of the post to update
	 * @param {string} caption - The updated caption
	 * @param {string} imageUrl - The updated image URL
	 * @returns {Object|string} - The updated post object if successful, otherwise an error message
	 */
	static updatePost(postId, caption, imageUrl) {
		// Find the post by ID
		const post = posts.find(p => p.id == postId);
		// If post is found, update its properties and return the updated post
		if (post) {
			post.caption = caption;
			post.imageUrl = imageUrl;
			return post;
		}
		// If post is not found, return an error message
		return 'Post not Found';
	}

	/**
	 * Static method to delete a post
	 * @param {number} id - The ID of the post to delete
	 * @param {number} userId - The ID of the user who owns the post
	 * @returns {Object|string} - The deleted post object if successful, otherwise an error message
	 */
	static deletePost(id, userId) {
		// Find the index of the post to delete
		const postIndex = posts.findIndex(p => p.id == id && p.userId == userId);
		// If index is valid, remove the post from the array and return it
		if (postIndex !== -1) {
			return posts.splice(postIndex, 1)[0];
		}
		// If index is invalid, return an error message
		return 'Post not found';
	}


	static filterPostsByCaption(posts, caption) {
		// Filter posts based on the caption containing the specified string
		return posts.filter(post => post.caption.includes(caption));
	}


	static bookmarkPost(userId, postId) {
		const post = posts.find(p => p.id === postId);
		if (!post) {
			return "Post not found";
		}

		// Check if the user has already bookmarked the post
		if (post.bookmarkedBy.includes(userId)) {
			return "Post already bookmarked";
		}

		// Add user ID to the list of users who bookmarked the post
		post.bookmarkedBy.push(userId);
		return "Post bookmarked successfully";
	}

	static savePost(userId, postId) {
		const post = posts.find(p => p.id === postId);
		if (!post) {
			return "Post not found";
		}

		// Check if the user has already saved the post
		if (post.savedBy.includes(userId)) {
			return "Post already saved";
		}

		// Add user ID to the list of users who saved the post
		post.savedBy.push(userId);
		return "Post saved successfully";
	}

	static archivePost(userId, postId) {
		const post = posts.find(p => p.id === postId);
		if (!post) {
			return "Post not found";
		}

		// Check if the user has already archived the post
		if (post.archivedBy.includes(userId)) {
			return "Post already archived by this user";
		}

		// Add user ID to the list of users who archived the post
		post.archivedBy.push(userId);
		return "Post archived successfully";
	}



}

// Posts array
const posts = [
	new PostModel(1, 1, 'First Post', 'x')
];

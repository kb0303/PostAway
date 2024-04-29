export default class LikeModel {
    /**
     * Create a LikeModel instance.
     * @param {number} id - The ID of the like.
     * @param {number} userId - The ID of the user who liked the post.
     * @param {number} postId - The ID of the post that was liked.
     * @param {number} noOfLikes - The number of likes for the post.
     */
    constructor(id, userId, postId, noOfLikes) {
        this.id = id;
        this.userId = userId;
        this.postId = postId;
        this.noOfLikes = noOfLikes;
    }

    /**
     * Get all likes for a specific post.
     * @param {number} postId - The ID of the post.
     * @returns {Array} - An array of like objects.
     */
    static getAllLikes(postId) {
        const postLikes = likes.filter(l => l.postId == postId);
        if (postLikes.length <= 0) {
            return "No likes found for this post";
        } else {
            return postLikes;
        }
    }

    /**
     * Toggle the like status of a post for a user.
     * @param {number} userId - The ID of the user.
     * @param {number} postId - The ID of the post.
     * @returns {string} - A message indicating the like status.
     */
    static togglePostLikeStatus(userId, postId) {
        const postLikes = likes.find(l => l.userId == userId && l.postId == postId);

        if (!postLikes) {
            // If no like is found for this post by the user, create a new like
            const newLike = new LikeModel(likes.length + 1, userId, postId, 1);
            likes.push(newLike);
            return "You liked the post";
        } else {
            // Toggle like status
            if (!postLikes.likeStatus) {
                // If likeStatus is false, user is liking the post
                postLikes.noOfLikes++;
                postLikes.likeStatus = true;
                return "You liked the post";
            } else {
                // If likeStatus is true, user is unliking the post
                postLikes.noOfLikes--;
                postLikes.likeStatus = false;
                return "You unliked the post";
            }
        }
    }
}

// Sample data
var likes = [
    new LikeModel(1, 1, 1, 5),
    new LikeModel(2, 1, 2, 1)
];

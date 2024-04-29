import express from 'express';
import jwtAuth from './src/middlewares/jwtAuth.middleware.js';
import UserRouter from './src/features/user/user.routes.js';
import PostRouter from './src/features/post/post.routes.js';
import CommentRouter from './src/features/comment/comment.routes.js';
import LikeRouter from './src/features/like/like.routes.js';

const server = express();

// Middleware to parse JSON bodies
server.use(express.json());

// Routes
server.use("/api/user", UserRouter); // User routes
server.use("/api/posts", jwtAuth, PostRouter); // Post routes with JWT authentication
server.use("/api/comments", jwtAuth, CommentRouter); // Comment routes with JWT authentication
server.use("/api/likes", jwtAuth, LikeRouter); // Like routes with JWT authentication

// Default route handler
server.get("/", (req, res) => {
    res.send("Welcome to Post Away");
});

// Handle API not found
server.use((req, res) => {
    res.status(404).send("API not found. Please check our documentation at /api-docs");
});

// Server setup
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

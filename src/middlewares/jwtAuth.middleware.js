import jwt from 'jsonwebtoken';

/**
 * Middleware to authenticate JSON Web Tokens (JWT).
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - Call the next function/middleware.
 */
const jwtAuth = (req, res, next) => {
	// Get token from request headers
	const token = req.headers["authorization"];

	// Check if token exists
	if (!token) {
		// If token does not exist, send 401 Unauthorized response
		res.status(401).send("Unauthorized");
	}

	try {
		// Verify the token and extract payload
		const payload = jwt.verify(token, 'DnybJf0qUcP758OwrkSRSrfWPvGYloMh');

		// Set userId in request for further use
		req.userId = payload.userId;
		console.log(payload); // Log payload for debugging

	} catch (err) {
		// If token verification fails, send 401 Unauthorized response
		res.status(401).send("Unauthorized");
	}

	// Call next middleware or route handler
	next();
}

// Export the middleware function
export default jwtAuth;

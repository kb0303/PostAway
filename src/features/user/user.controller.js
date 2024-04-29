// Import the UserModel and jsonwebtoken
import UserModel from "./user.model.js";
import jwt from 'jsonwebtoken';

// Controller for handling user-related operations
export default class UserController {
	/**
	 * Sign up a new user
	 * @param {Object} req - The request object
	 * @param {Object} res - The response object
	 */
	signUp(req, res) {
		// Destructure name, email, and password from the request body
		const { name, email, password } = req.body;
		// Call the signUp method of UserModel to create a new user
		const newUser = UserModel.signUp(name, email, password);
		// Respond with the newly created user and success:true
		res.status(201).send({ success: true, user: newUser });
	}

	/**
	 * Sign in an existing user
	 * @param {Object} req - The request object
	 * @param {Object} res - The response object
	 */
	signIn(req, res) {
		// Destructure email and password from the request body
		const { email, password } = req.body;
		// Attempt to sign in the user using the provided credentials
		const signedUp = UserModel.signIn(email, password);
		// If user does not exist or credentials are incorrect, respond with error
		if (!signedUp) {
			// Respond with success:false and error message
			res.status(400).send({ success: false, message: "Incorrect Credentials" });
		} else {
			// Generate a JWT token for the signed-in user
			const token = jwt.sign({ userId: signedUp.id, email: signedUp.email },
				'DnybJf0qUcP758OwrkSRSrfWPvGYloMh', {
				expiresIn: '1h'
			});
			// Respond with the generated token and success:true
			res.status(200).send({ success: true, token });
		}
	}
}

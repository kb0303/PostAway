// Class representing a user model
export default class UserModel {
	/**
	 * Constructor for UserModel
	 * @param {string} name - The name of the user
	 * @param {string} email - The email of the user
	 * @param {string} password - The password of the user
	 */
	constructor(name, email, password) {
		this.name = name;
		this.email = email;
		this.password = password;
	}

	/**
	 * Static method to sign up a new user
	 * @param {string} name - The name of the user
	 * @param {string} email - The email of the user
	 * @param {string} password - The password of the user
	 * @returns {UserModel} - The newly signed up user
	 */
	static signUp(name, email, password) {
		const newUser = new UserModel(name, email, password);
		newUser.id = users.length + 1; // Assigning a unique ID
		users.push(newUser); // Adding the new user to the users array
		return newUser;
	}

	/**
	 * Static method to sign in a user
	 * @param {string} email - The email of the user
	 * @param {string} password - The password of the user
	 * @returns {UserModel|null} - The signed in user, or null if not found
	 */
	static signIn(email, password) {
		const user = users.find(u => u.email === email && u.password === password); // Finding user by email and password
		return user;
	}

	/**
	 * Static method to get all users
	 * @returns {UserModel[]} - Array of all users
	 */
	static getAll() {
		return users;
	}
}

// Users array
let users = [
	{
		"id": 1,
		"name": "User name",
		"email": "user@gmail.com",
		"password": "user123",
	},
];

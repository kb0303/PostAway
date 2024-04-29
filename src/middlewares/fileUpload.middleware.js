import multer from "multer";

// Configure storage for uploaded files
const storage = multer.diskStorage({
	// Specify destination folder for uploaded files
	destination: function (req, file, cb) {
		cb(null, './uploads');
	},
	// Define filename for uploaded files
	filename: function (req, file, cb) {
		// Generate a unique filename based on current timestamp and random number
		const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
		// Concatenate original filename with unique suffix
		cb(null, file.originalname + '-' + uniqueSuffix);
	}
});

// Create multer instance with configured storage
export const upload = multer({ storage: storage });

// Import necessary classes from the Appwrite SDK
import { Account, Client, Databases, Storage } from "appwrite";

// Create a configuration object with all the Appwrite settings
// These values are loaded from environment variables (defined in .env file)
export const appwriteConfig = {
	// The URL of the Appwrite API server
	endpointUrl: import.meta.env.VITE_APPWRITE_API_ENDPOINT,

	// The ID of your Appwrite project
	projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,

	// API key for server-side operations (if needed)
	apiKey: import.meta.env.VITE_APPWRITE_API_KEY,

	// The ID of the database in your Appwrite project
	databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,

	// The ID of the collection that stores user data
	userCollectionId: import.meta.env.VITE_APPWRITE_USERS_COLLECTION_ID,

	// The ID of the collection that stores trip data
	tripsCollectionId:
		import.meta.env.VITE_APPWRITE_TRIPS_COLLECTION_ID ||
		import.meta.env.VITE_APPWRITE_ITINERARY_COLLECTION_ID,
};

// Create a new Appwrite client instance
// This is the main entry point for communicating with Appwrite
const client = new Client();

// Configure the client with your project details
client
	.setEndpoint(appwriteConfig.endpointUrl) // Set the API endpoint URL
	.setProject(appwriteConfig.projectId); // Set your project ID

// Create service instances for different Appwrite features
// Services: They are like different departments in a company that handle specific tasks, i.e giving out services

// Account service - handles user authentication and account management
const account = new Account(client);

// Databases service - handles database operations (create, read, update, delete)
const database = new Databases(client);

// Storage service - handles file uploads and management
const storage = new Storage(client);

// Export all services so they can be imported and used in other files
export { client, account, database, storage };

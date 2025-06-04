import { Account, Client, Databases, Storage } from "appwrite";

export const appwriteConfig = {
	enpointUrl: import.meta.env.VITE_APPWRITE_ENDPOINT,
	projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
	apiKey: import.meta.env.VITE_APPWRITE_API_KEY,
	database: import.meta.env.VITE_APPWRITE_DATABASE_ID,
	userCollectionId: import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID,
	tripsCollectionId: import.meta.env.VITE_APPWRITE_TRIPS_COLLECTION_ID,
};

const client = new Client();

client
	.setEndpoint(appwriteConfig.enpointUrl)
	.setProject(appwriteConfig.projectId);

const account = new Account(client);
const database = new Databases(client);
const storage = new Storage(client);

export { client, account, database, storage };

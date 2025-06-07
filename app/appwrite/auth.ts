/* 

This file handles all authentication-related functionality for Vinatours
application using Appwrite as the backend service. It includes functions for:

1/ Checking if a user exists in your database
2/ Storing new user data after authentication
3/ Fetching a user's Google profile picture
4/ Handling Google OAuth login
5/ Logging out users
6/ Retrieving the current user's data


*/

// Import necessary functions and types from Appwrite SDK
import { ID, OAuthProvider, Query } from "appwrite";
// Import our configured Appwrite services from client.ts
import { account, database, appwriteConfig } from "~/appwrite/client";
// Import redirect function from React Router for navigation
import { redirect } from "react-router";

// Function to check if a user already exists in our database
export const getExistingUser = async (id: string) => {
	try {
		// Query the database to find a user with the given accountId
		const { documents, total } = await database.listDocuments(
			appwriteConfig.databaseId, // Database ID from our config
			appwriteConfig.userCollectionId, // Collection ID for users
			[Query.equal("accountId", id)] // Filter to find user with matching accountId
		);
		// If user exists (total > 0), return the user document, otherwise return null
		return total > 0 ? documents[0] : null;
	} catch (error) {
		// Log any errors that occur during the process
		console.error("Error fetching user:", error);
		return null;
	}
};

// Function to store a new user's data in our database
export const storeUserData = async () => {
	try {
		// Get the current logged-in user from Appwrite
		const user = await account.get();
		// If no user is found, throw an error
		if (!user) throw new Error("User not found");

		// Get the current session to access OAuth provider token
		const { providerAccessToken } = (await account.getSession("current")) || {};
		// If we have a token from Google, fetch the user's profile picture
		const profilePicture = providerAccessToken
			? await getGooglePicture(providerAccessToken)
			: null;

		// Create a new document in our users collection
		const createdUser = await database.createDocument(
			appwriteConfig.databaseId, // Database ID
			appwriteConfig.userCollectionId, // Collection ID for users
			ID.unique(), // Generate a unique ID for this document
			{
				accountId: user.$id, // Appwrite account ID
				email: user.email, // User's email
				name: user.name, // User's name
				imageUrl: profilePicture, // Profile picture URL (if available)
				joinedAt: new Date().toISOString(), // Current timestamp
			}
		);

		// If user creation failed, redirect to sign-in page
		if (!createdUser.$id) redirect("/sign-in");
	} catch (error) {
		// Log any errors that occur during the process
		console.error("Error storing user data:", error);
	}
};

// Helper function to fetch a user's Google profile picture
const getGooglePicture = async (accessToken: string) => {
	try {
		// Make a request to Google People API to get the user's photos
		const response = await fetch(
			"https://people.googleapis.com/v1/people/me?personFields=photos",
			{ headers: { Authorization: `Bearer ${accessToken}` } }
		);
		// If the request failed, throw an error
		if (!response.ok) throw new Error("Failed to fetch Google profile picture");

		// Parse the response and extract the first photo URL
		const { photos } = await response.json();
		return photos?.[0]?.url || null;
	} catch (error) {
		// Log any errors and return null if picture can't be fetched
		console.error("Error fetching Google picture:", error);
		return null;
	}
};

// Function to initiate Google OAuth login
export const loginWithGoogle = async () => {
	try {
		// Start the OAuth2 authentication process with Google
		const success = `${window.location.origin}/`; // Redirect URL after successful login
		const failure = `${window.location.origin}/404`; // Redirect URL after failed login

		console.log("Starting OAuth with:", {
			provider: OAuthProvider.Google,
			success,
			failure,
			endpoint: appwriteConfig.endpointUrl,
		});

		await account.createOAuth2Session(OAuthProvider.Google, success, failure);
	} catch (error) {
		// Log any errors during the OAuth process
		console.error("Error during OAuth2 session creation:", error);
		// You might want to show an error message to the user here
	}
};

// Function to log out the current user
export const logoutUser = async () => {
	try {
		// Delete the current session to log the user out
		await account.deleteSession("current");
	} catch (error) {
		// Log any errors during logout
		console.error("Error during logout:", error);
	}
};

// Function to get the current user's data
export const getUser = async () => {
	try {
		// Get the current logged-in user from Appwrite
		const user = await account.get();
		// If no user is found, redirect to sign-in page
		if (!user) return redirect("/sign-in");

		// Query our database to get the user's additional data
		const { documents } = await database.listDocuments(
			appwriteConfig.databaseId, // Database ID
			appwriteConfig.userCollectionId, // Collection ID for users
			[
				Query.equal("accountId", user.$id), // Find user with matching accountId
				// Only select these specific fields to return
				Query.select(["name", "email", "imageUrl", "joinedAt", "accountId"]),
			]
		);

		// If user data is found, return it; otherwise redirect to sign-in
		return documents.length > 0 ? documents[0] : redirect("/sign-in");
	} catch (error) {
		// Log any errors and return null
		console.error("Error fetching user:", error);
		return null;
	}
};

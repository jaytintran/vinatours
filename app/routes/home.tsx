import { Link } from "react-router";
import { useEffect, useState } from "react";
import { account } from "~/appwrite/client";
import { getExistingUser, logoutUser } from "~/appwrite/auth";

export default function Home() {
	const [user, setUser] = useState({
		name: "",
		email: "",
		status: "user",
		imageUrl: "",
	});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Check if user is signed in
		const checkUserStatus = async () => {
			try {
				setLoading(true);
				const currentUser = await account.get();

				if (currentUser.$id) {
					// User is signed in, get their role
					const userData = await getExistingUser(currentUser.$id);
					setUser({
						name: currentUser.name,
						email: currentUser.email,
						status: userData?.status,
						imageUrl: userData?.imageUrl,
					});
				}
			} catch (error) {
				console.error("Error checking user status:", error);
				// User is not signed in or there was an error
				setUser({ name: "", email: "", status: "user", imageUrl: "" });
			} finally {
				setLoading(false);
			}
		};

		checkUserStatus();
	}, []);

	return (
		<div className="min-h-screen flex flex-col items-center justify-center">
			<h1 className="text-4xl font-bold mb-8">Welcome to VinaTours</h1>

			{/* User Status Indicator */}
			{loading ? (
				<div className="mb-6 px-4 py-2 bg-gray-100 rounded-lg">
					Loading user status...
				</div>
			) : user ? (
				<div className="mb-6 px-10 py-15 sign-in-card bg-white shadow-md rounded-lg flex flex-col items-center">
					<p className="text-gray-700">
						Signed in as <span className="font-semibold">{user.name}</span>
					</p>
					{/* <img
						src={user.imageUrl}
						alt={user.name}
						className="w-10 h-10 rounded-full"
					/> */}
					<div className="mt-1 flex items-center">
						<span className="text-sm mr-2">Status:</span>
						<span
							className={`text-sm font-medium px-2 py-1 rounded-full ${
								user.status === "admin"
									? "bg-purple-100 text-purple-800"
									: "bg-blue-100 text-blue-800"
							}`}
						>
							{user.status === "admin" ? "Admin" : "User"}
						</span>
					</div>
					<div className="flex flex-col mt-5 gap-4">
						<button
							onClick={logoutUser}
							className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-700"
						>
							Sign Out
						</button>
						{user.status === "admin" && (
							<Link
								to="/dashboard"
								className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
							>
								Go to Dashboard
							</Link>
						)}
					</div>
				</div>
			) : (
				<div className="mb-6 px-4 py-2 bg-yellow-50 text-yellow-700 rounded-lg">
					You are not signed in.{" "}
					<Link to="/sign-in" className="underline font-medium">
						Sign in here
					</Link>
				</div>
			)}
		</div>
	);
}

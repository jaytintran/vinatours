import { Link } from "react-router";

export default function Home() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center">
			<h1 className="text-4xl font-bold mb-8">Welcome to VinaTours</h1>
			<div className="flex gap-4">
				<Link
					to="/dashboard"
					className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
				>
					Go to Dashboard
				</Link>
				<Link
					to="/trips"
					className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
				>
					View AI Trips
				</Link>
			</div>
		</div>
	);
}

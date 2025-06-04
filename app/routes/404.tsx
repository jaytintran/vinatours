import { Link } from "react-router";

export default function NotFound() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center">
			<h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
			<p className="text-gray-600 mb-8">
				The requested page could not be found.
			</p>
			<Link
				to="/"
				className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
			>
				Go Home
			</Link>
		</div>
	);
}

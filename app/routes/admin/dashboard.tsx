import { Header } from "components";

const Dashboard = () => {
	const user = { name: "John Doe" }; // Simulated user data, replace with actual user context or state

	return (
		<main className="dashboard wrapper">
			<Header
				title={`Welcome ${user?.name || "Guest"} 👋`}
				description="Track activites, trends, and popular destinations."
				className="mb-4"
			/>
			Dashboard Content
		</main>
	);
};
export default Dashboard;

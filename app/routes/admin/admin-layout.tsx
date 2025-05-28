import React, { useState } from "react";
import { Outlet } from "react-router";

const AdminLayout = () => {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	const handleToggleSidebar = () => {
		setSidebarOpen(!sidebarOpen);
	};

	return (
		<div className="admin-layout">
			<nav className="lg:hidden w-full relative bg-amber-300 h-[50px]">
				<button
					className="lg:hidden flex items-center absolute top-0 right-0 p-3"
					onClick={handleToggleSidebar}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth="2"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
			</nav>
			<aside
				className={`${
					sidebarOpen ? "block" : "hidden"
				} w-full bg-dark-100 h-screen lg:   `}
			>
				Sidebar
			</aside>
			<aside className="w-full max-w-[250px] hidden lg:block bg-dark-100">
				<aside className="children">
					<Outlet />
				</aside>
			</aside>
		</div>
	);
};
export default AdminLayout;

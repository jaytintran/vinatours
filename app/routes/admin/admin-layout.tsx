import React, { useState } from "react";
import { Outlet, redirect } from "react-router";
import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
import { NavItems } from "components";
import { MobileSidebar } from "components";
import { account } from "~/appwrite/client";
import { getExistingUser, storeUserData } from "~/appwrite/auth";

export async function clientLoader() {
	try {
		const user = await account.get();

		if (!user.$id) return redirect("/sign-in");

		const existingUser = await getExistingUser(user.$id);

		// If user exists in database
		if (existingUser) {
			// Check if user is admin
			if (existingUser.status !== "admin") {
				console.log("Access denied: User is not an admin");
				return redirect("/");
			}
			return existingUser;
		}

		// If user doesn't exist in database, create new user
		// Note: New users should not have admin access by default
		const newUser = await storeUserData();
		// Redirect new users to home page (they don't have admin status yet)
		return redirect("/");
	} catch (error) {
		console.error("Error in clientLoader", error);
		return redirect("/sign-in");
	}
}

const AdminLayout = () => {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	const handleToggleSidebar = () => {
		setSidebarOpen(!sidebarOpen);
	};

	return (
		<div className="admin-layout">
			{/* Mobile Sidebar */}
			<MobileSidebar />

			{/* Desktop Sidebar */}
			<aside className="w-full max-w-[300px] hidden lg:block">
				<SidebarComponent width={300} enableGestures={false}>
					<NavItems />
				</SidebarComponent>
			</aside>

			{/* Content */}
			<aside className="childrens flex-1 p-4 lg:p-8">
				<Outlet />
			</aside>
		</div>
	);
};
export default AdminLayout;

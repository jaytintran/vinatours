import React, { useState } from "react";
import { Outlet } from "react-router";
import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
import { NavItems } from "components";
import { MobileSidebar } from "components";

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

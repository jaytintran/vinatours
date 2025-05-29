// Disable TypeScript checking for simplicity in this example
// @ts-nocheck

// Import necessary components
import { SidebarComponent } from "@syncfusion/ej2-react-navigations"; // Sidebar library component
import { Link } from "react-router"; // For navigation links
import NavItems from "./NavItems"; // This contains your list of sidebar menu items

// This is the main sidebar component for mobile screens
const MobileSidebar = () => {
	// Step 1: Create a variable to store the Sidebar instance
	let sidebar;

	// Step 2: Create a function to show/hide the sidebar
	const toggleSidebar = () => {
		sidebar.toggle(); // This toggles the sidebar open/close
	};

	return (
		// This wrapper is shown only on small screens (hidden on large screens - `lg:hidden`)
		<div className="mobile-sidebar wrapper lg:hidden border-b border-gray-200">
			{/* Header section: Logo and Menu Button */}
			<header className="flex justify-between items-center">
				{/* Logo Link (Takes user to homepage) */}
				<Link to="/" className="flex items-center gap-2">
					<img
						src="/assets/icons/logo.svg" // Logo icon
						alt="logo"
						className="size-[30px]"
					/>
					<article className="flex flex-col items-start relative">
						<h1 className="uppercase font-figtree">Vinatours</h1>
						<span className="uppercase font-figtree absolute -top-4 -right-4 text-xs bg-primary-500 text-white px-1 py-0.5 rounded">
							Admin
						</span>
					</article>
				</Link>

				{/* Menu Button: Opens or closes the sidebar when clicked */}
				<button onClick={toggleSidebar} aria-label="Toggle Menu">
					<img
						src="/assets/icons/menu.svg" // Hamburger icon
						alt="Menu"
						className="size-7"
					/>
				</button>
			</header>

			{/* Sidebar menu that slides over the screen */}
			<SidebarComponent
				ref={(el) => (sidebar = el)} // Store sidebar reference in variable
				width={250} // Sidebar width in pixels
				created={() => sidebar.hide()} // Hide sidebar on page load
				closeOnDocumentClick={true} // Close sidebar if user clicks outside it
				showBackdrop={true} // Dark background when sidebar is open
				type="Over" // Sidebar slides over content
			>
				{/* Insert navigation items inside the sidebar */}
				<NavItems handleClick={toggleSidebar} />
				{/* Clicking a menu item will also close the sidebar */}
			</SidebarComponent>
		</div>
	);
};

export default MobileSidebar;

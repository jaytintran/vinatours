import { Link, NavLink } from "react-router";
import { sidebarItems } from "~/constants";

const NavItems = () => {
	return (
		<section className="nav-items">
			<Link to="/" className="link-logo">
				<img src="/assets/icons/logo.svg" alt="logo" className="size-[30px]" />
				<h1>Vinatours</h1>
			</Link>

			<div className="container">
				<nav>
					{sidebarItems.map(({ id, href, icon, label }) => (
						<NavLink to={href} key={id} className="">
							{({ isActive }: { isActive: boolean }) => (
								<div
									className={`flex gap-3 items-center ${
										isActive ? "text-blue-800" : ""
									}`}
								>
									<img src={icon} alt={label} className="size-[30px]" />
									<h1 className="text-md">{label}</h1>
								</div>
							)}
						</NavLink>
					))}
				</nav>
			</div>
		</section>
	);
};

export default NavItems;

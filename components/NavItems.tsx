import { Link, NavLink } from "react-router";
import { sidebarItems } from "~/constants";
import { cn } from "~/lib/utils";

const NavItems = ({ handleClick }: { handleClick?: () => void }) => {
	const user = {
		name: "John Doe",
		email: "john.doe@example.com",
		imageUrl: "/assets/images/david.webp",
	};

	return (
		<section className="nav-items">
			<Link
				to="/"
				className="link-logo text-center flex items-center gap-2 mx-auto"
			>
				<img src="/assets/icons/logo.svg" alt="logo" className="size-[30px]" />
				<article className="flex flex-col items-start relative">
					<h1 className="uppercase font-figtree">Vinatours</h1>
					<span className="uppercase font-figtree absolute -top-4 -right-4 text-xs bg-primary-500 text-white px-1 py-0.5 rounded">
						Admin
					</span>
				</article>
			</Link>

			<div className="container">
				<nav>
					{sidebarItems.map(({ id, href, icon, label }) => (
						<NavLink to={href} key={id} className="">
							{({ isActive }: { isActive: boolean }) => (
								<div
									className={cn("group nav-item", {
										"bg-primary-100 !text-white": isActive,
									})}
									title={label}
									aria-label={label}
									onClick={handleClick}
								>
									<img
										src={icon}
										alt={label}
										className={`group-hover:brightness-0 group-hover:invert ${
											isActive ? "brightness-0 invert" : "text-dark-200"
										}`}
									/>
									<span className="text-sm">{label}</span>
								</div>
							)}
						</NavLink>
					))}
				</nav>

				<footer className="nav-footer flex gap-3 items-center justify-between">
					<section className="flex items-center gap-3">
						<img
							src={user?.imageUrl || "/assets/images/david.webp"}
							alt={user?.name}
						/>
						<article className="flex flex-col items-start">
							<h2 className="text-sm">{user?.name}</h2>
							<p className="text-xs">{user?.email}</p>
						</article>
					</section>
					<button
						className="btn-logout p-3 cursor-pointer flex items-center justify-center"
						onClick={() => console.log("Logout")}
					>
						<img
							src="/assets/icons/logout.svg"
							alt="Logout"
							className="size-[20px] group-hover:brightness-0 group-hover:invert"
						/>
					</button>
				</footer>
			</div>
		</section>
	);
};

export default NavItems;

interface HeaderProps {
	title: string;
	description: string;
	className?: string;
}

import { useLocation } from "react-router";
import { cn } from "~/lib/utils";

const Header = ({ title, description, className = "" }: HeaderProps) => {
	const location = useLocation();

	return (
		<header className={`header ${className}`}>
			<div>
				<h1
					className={cn(
						"text-dark-100 text-xl font-semibold",
						location.pathname === "/"
							? "text-2xl md:text-4xl font-bold"
							: "text-xl md:text-2xl font-semibold"
					)}
				>
					{title}
				</h1>
				<h1
					className={cn(
						"text-gray-100 text-xl font-normal",
						location.pathname === "/"
							? "text-base md:text-lg"
							: "text-sm md:text-lg"
					)}
				>
					{description}
				</h1>{" "}
			</div>
		</header>
	);
};

export default Header;

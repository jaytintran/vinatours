import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router";
import {
	ChipDirective,
	ChipListComponent,
	ChipsDirective,
} from "@syncfusion/ej2-react-buttons";
import { cn, getFirstWord } from "~/lib/utils";

const TripCard = ({
	id,
	name,
	imageUrl,
	location,
	tags,
	price,
}: TripCardProps) => {
	const path = useLocation();
	return (
		<Link
			to={
				path &&
				path.pathname &&
				(path.pathname === "/" || path.pathname.startsWith("/travel"))
					? `travel/${id}`
					: `/trips/${id}`
			}
			className="trip-card"
		>
			<img src={imageUrl} alt={name} className="w-full h-36 object-cover" />

			<article className="">
				<h2 className="text-2xl font-semibold">{name}</h2>

				<figure>
					<img
						src="assets/icons/location-mark.svg"
						alt="location"
						className="size-4"
					/>
					<figcaption className="text-gray-100 text-sm">{location}</figcaption>
				</figure>

				<div className="mt-2 pr-3.5 pb-5">
					<ChipListComponent id="travel-chip">
						<ChipsDirective>
							{tags.map((tag, index) => (
								<ChipDirective
									key={index}
									text={getFirstWord(tag)}
									cssClass={cn(
										index == 1
											? "!bg-pink-50 !text-pink-500"
											: "!bg-success !text-success-700"
									)}
								/>
							))}
						</ChipsDirective>
					</ChipListComponent>
				</div>

				<article className="tripCard-pill">{price}</article>
			</article>
		</Link>
	);
};

export default TripCard;

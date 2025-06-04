import { calculateTrendPercentage, cn } from "~/lib/utils";

const StatsCard = ({
	headerTitle,
	total,
	currentMonthCount,
	lastMonthCount,
}: StatsCard) => {
	const { trend, percentage } = calculateTrendPercentage(
		currentMonthCount,
		lastMonthCount
	);

	const isDecrement = trend === "decrement";

	return (
		<article className="stats-card">
			<h3 className="text-base font-medium">{headerTitle}</h3>

			<div className="content">
				<div className="flex flex-col gap-4">
					<h2 className="text-4xl font-semibold">{total}</h2>

					<figure className="flex gap-2 items-center">
						<img
							src={`/assets/icons/${
								isDecrement ? "arrow-down-red" : "arrow-up-green"
							}.svg`}
							alt="arrow"
							className="size-5"
						/>
						<caption
							className={cn(
								"text-sm",
								"font-medium",
								isDecrement ? "text-red-500" : "text-success-700"
							)}
						>
							{Math.round(percentage)}%
						</caption>
						<span className="font-mediumn text-sm text-gray-100 truncate">
							vs. last month
						</span>
					</figure>
				</div>

				<img
					src={`/assets/icons/${isDecrement ? "decrement" : "increment"}.svg`}
					alt="trend graph"
					className="xl:w-32 xl:h-full md:h-32 w-full h-full"
				/>
			</div>
		</article>
	);
};
export default StatsCard;

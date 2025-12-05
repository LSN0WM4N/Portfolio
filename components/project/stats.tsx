import { format } from "date-fns";
import { Clock, Eye, GitFork, Star } from "lucide-react";

interface Props {
	stars: number;
	forks: number;
	watchers: number;
	updated_at: string;
}

export default function Stats({
	stars,
	forks,
	watchers,
	updated_at,
}: Props) {
	
	const stats = [{
		name: 'Stars',
		value: stars,
		color: 'text-yellow-400',
		Icon: Star,
	}, {
		name: 'Forks',
		value: forks,
		color: 'text-green-600',
		Icon: GitFork,
	}, {
		name: 'Watchers',
		value: watchers,
		color: 'text-blue-600',
		Icon: Eye,
	}, {
		name: 'Last_update',
		value: format(updated_at, "dd/LL/yyyy"),
		color: 'text-purple-600',
		Icon: Clock,
	}];

	return (
		<div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
			{stats.map(({ name, value, color, Icon }) => (
				<div key={`stat-${name}-${value}`} className="bg-gray-900/50 px-4 py-1 rounded-lg border border-gray-800">
					<div className="flex items-center justify-between gap-1">
						<div className="rounded">
							<Icon className={`w-4 h-4 ${ color }`}/>
						</div>
						<div className="flex items-center gap-2">
							<p className="text-md font-bold">{ value }</p>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

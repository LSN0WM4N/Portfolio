"use client"

import { CPlusPlus, Go, Javascript, Python, Typescript } from "@/components/projects/icons";
import { formatBytes } from "@/lib/utils";
import Metadata from "./metadata";

interface Props {
	language: string;
	languagePercentages: {
		language: string;
		percentage: string;
		bytes: number;
	}[];
	size: number;
	created_at: string;
	pushed_at: string;
	default_branch: string;
	license?: string;
	topics?: string[];
}

export default function ProjectAside({
	languagePercentages,
	size,
	created_at,
	pushed_at,
	default_branch,
	license,
	topics,
}: Props) {
	return (
		<div className="lg:col-span-1 space-y-4">
			<Languages languages={ languagePercentages }/> 
			
			<Metadata 
				size={ size }
				created_at={ created_at }
				pushed_at={ pushed_at }
				default_branch={ default_branch }
				license={ license }
			/>
			
			<Topics topics={ topics } />
			
		</div>
	);
} 

function Languages({ languages }: { languages: {
    language: string;
    percentage: string;
    bytes: number;
}[] }) {

	return (
		<div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
			<h3 className="font-bold text-lg mb-4">Languages</h3>
			<div className="space-y-3">
				{languages.map(({ language, percentage, bytes }) => (
					<div key={language}>
						<div className="flex justify-between text-sm mb-1">
							<div className="flex items-center gap-2">
								{getLanguageIcon(language)}
								<span>{language}</span>
							</div>
							<span>{percentage}%</span>
						</div>
						<div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
							<div 
								className="bg-blue-600 h-2 rounded-full"
								style={{ width: `${percentage}%` }}
							></div>
						</div>
						<p className="text-xs text-gray-500 mt-1">
							{formatBytes(bytes)}
						</p>
					</div>
				))}
			</div>
		</div>
	);
}

function Topics({ topics }: { topics?: string[] }) {
	if (!topics || topics.length === 0)
		return;

	return (
		<div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
			<h3 className="font-bold text-lg mb-4">Topics:</h3>
			<div className="flex flex-wrap gap-2">
				{topics.map((topic) => (
					<span
						key={topic}
						className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm"
					> {topic} </span>
				))}
			</div>
		</div>
	);
}

function getLanguageIcon(language: string) {
	switch (language) {
		case 'JavaScript': return  <Javascript width={24}/>
		case 'TypeScript': return  <Typescript width={24}/>
		case 'Python': return  <Python width={24}/>
		case 'C++': return  <CPlusPlus width={24}/>
		case 'Go': return  <Go width={30}/>	
	};
}
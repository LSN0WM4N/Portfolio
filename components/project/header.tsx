import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface Props {
	name: string;
	description?: string;
	html_url: string;
	homepage?: string;
}

// TODO: Fix responsive issues 
export default function ProjectHeader({
	name,
	description,
	html_url,
	homepage,
}: Props) {
	return (
		<header className="mb-4">
			<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
				<NameAndDescription name={ name } description={ description }/>
				<GotoGithub html_url={html_url} homepage={homepage} />
			</div>
		</header>
	);
}

function NameAndDescription({ 
	name,
	description
}: {
	name: string,
	description?: string,
}) {
	return (
		<div>
			<h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
				<Link href="/" className="hover:text-cyan-600"><ArrowLeft className="h-8 w-8"/></Link>
				{ name }
			</h1>
			<p className="text-gray-600 dark:text-gray-300 mt-2">
				{ description || 'No description'}
			</p>
		</div>
	);
}

function GotoGithub({
	html_url,
	homepage,
}: {
	html_url: string;
	homepage?: string;
}) {
	return (
		<div className="flex gap-3">
			<a
				href={ html_url}
				target="_blank"
				rel="noopener noreferrer"
				className="inline-flex items-center gap-2 px-5 py-3 bg-gray-900 text-white rounded-lg hover:bg-black transition-colors"
			> Go to GitHub </a>
			{ homepage && (
				<a
					href={ homepage }
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center gap-2 px-5 py-3 bg-gray-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
				> Demo </a>
			)}
		</div>
	);
}


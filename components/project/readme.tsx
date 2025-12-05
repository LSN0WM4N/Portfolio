import { ArrowRight } from "lucide-react";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import Stats from "./stats";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";

interface Props {
	html_url: string;
	readme?: string;
	stargazers_count: number;
	forks_count: number;
	watchers_count: number;
	updated_at: string;
}

export default function ProjectReadme({
	html_url,
	readme,
	stargazers_count,
	forks_count,
	watchers_count,
	updated_at,
}: Props) {
	return (          
		<div className="lg:col-span-2">
			<Stats 
				stars={ stargazers_count }
				forks={ forks_count }
				watchers={ watchers_count }
				updated_at={ updated_at }
			/>


			<div className="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
				<div className="flex items-center justify-between mb-6">
					<h2 className="text-2xl font-bold">README.md</h2>
					<Link
						href={`${ html_url }#readme`}
						target="_blank"
						rel="noopener noreferrer"
						className="text-sm text-cyan-500 hover:text-cyan-700 flex items-center gap-1"
					>
						<span> Read on GitHub </span> <ArrowRight className="w-4 h-4" />
					</Link>
				</div>
				
				<hr className="opacity-10"/>
				{readme ? (
					<div className="prose dark:prose-invert">
						<MarkdownRenderer content={ readme }/>
					</div>
				) : (
					<div className="text-center py-12">
						<p className="text-gray-500">No README aviable</p>
						<Link
							href={`${ html_url }#readme`}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-block mt-4 text-cyan-500 hover:text-cyan-700"
						>
							Open GitHub
						</Link>
					</div>
				)}
			</div>
		</div>
	);
}

function MarkdownRenderer({ content }: { content: string }) {
  return (
    <div className="prose dark:prose-invert">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeHighlight]}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

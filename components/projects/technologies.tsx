import { LanguageIcon } from "@/common/LanguageIcon";

interface Props {
  technologies: string[] | string;
	size?: number;
}

export default function Technologies({ technologies, size = 24 }: Props) {
	if (typeof technologies === 'string')
		technologies = [technologies];

	technologies = technologies.slice(0, 4);

	return (
		<div className="flex gap-1">
			{ technologies.map(( tech ) => (
				<LanguageIcon key={ crypto.randomUUID() } language={ tech } size={size}/>
			)) }
		</div>
	)
}
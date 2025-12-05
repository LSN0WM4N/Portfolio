import { C, CPlusPlus, Go, Javascript, Python, Typescript } from "../../common/icons";

interface Props {
  technologies: string[] | string;
	size?: number;
}

export default async function Technologies({ technologies, size = 24 }: Props) {
	if (typeof technologies === 'string')
		technologies = [technologies];

	technologies = technologies.slice(0, 4);

	return (
		<div className="flex gap-1">
			{ technologies.map(( tech ) => (
				<Technology key={ crypto.randomUUID() } tech={ tech } size={size}/>
			)) }
		</div>
	)
}

function Technology({ tech, size = 48 }: { tech: string, size?: number }) {
	switch (tech) {
		case 'js':
			return <Javascript width={size} height={size} className="rounded-sm"/> 
		case 'ts':
			return <Typescript width={size} height={size} className="rounded-sm"/> 
		case 'go':
			return <Go width={size} height={size} className="rounded-sm" /> 
		case 'python':
			return <Python width={size} height={size} className="rounded-sm" /> 
		case 'c':
			return <C width={size} height={size} className="rounded-sm" /> 
		case 'c++':
			return <CPlusPlus width={size} height={size} className="rounded-sm" /> 
	}
	return <></>
}
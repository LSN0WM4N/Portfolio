import ProjectHeader from "@/components/project/header";
import ProjectAside from "@/components/project/aside";
import ProjectReadme from "@/components/project/readme";

import { getRepoData } from "@/lib/github";

const projects = ['ChatLite', "ConwaysLifeGame", "TickTackToe", "ROADMAD-Projects", "DominoPlayer"];

export async function generateStaticParams() {
  return projects.map((project) => ({
    name: project,
  }));
}


export default async function Project({ params }: { params: Promise<{ name: string }> }) {
  const { name } = await params;
	
  const data = await getRepoData(name);
	if (!data)
		return <>404</>

	const { repo, readme, languages } = data;
  
  const totalBytes = Object.values(languages).reduce((a, b) => a + b, 0);
  const languagePercentages = Object.entries(languages).map(([lang, bytes]) => ({
    language: lang,
    percentage: ((bytes / totalBytes) * 100).toFixed(1),
    bytes: bytes
  })).slice(0, 3);

	return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
				<ProjectHeader { ...repo }/> 
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <ProjectAside {...repo} languagePercentages={languagePercentages} />          
          <ProjectReadme readme={readme} {...repo}/>
        </div>
      </div>
    </div>
  );
}
import { RepoResponseType } from "./types";

const GITHUB_API = 'https://api.github.com/repos'
const USERNAME = 'LSN0WM4N';

export async function getRepoData(repoName: string): Promise<RepoResponseType | null> {
  try {
    const response = await fetch(`${GITHUB_API}/${USERNAME}/${repoName}`, {
      headers: { 'Accept': 'application/vnd.github.v3+json' },
      next: { revalidate: 3600 }
    });
    
    if (!response.ok) {
      if (response.status === 404) 
        return null; 
      throw new Error(`GitHub API error: ${response.status}`);
    }
    
    const repo = await response.json();
    const readmeResponse = await fetch(`${GITHUB_API}/${USERNAME}/${repoName}/readme`, {
      headers: { 'Accept': 'application/vnd.github.v3.raw' },
    });
    
    let readmeContent = '';
    if (readmeResponse.ok) 
      readmeContent = await readmeResponse.text();
    
    const languagesResponse = await fetch(`${GITHUB_API}/${USERNAME}/${repoName}/languages`, { 
      next: { revalidate: 3600 } 
    });
    
    const languages = languagesResponse.ok ? await languagesResponse.json() : {};

    return {
      repo: {
        id: repo.id,
        name: repo.name,
        full_name: repo.full_name,
        description: repo.description,
        html_url: repo.html_url,
        homepage: repo.homepage,
        stargazers_count: repo.stargazers_count,
        forks_count: repo.forks_count,
        watchers_count: repo.watchers_count,
        language: repo.language,
        languages: languages,
        topics: repo.topics || [],
        created_at: repo.created_at,
        updated_at: repo.updated_at,  
        pushed_at: repo.pushed_at,
        size: repo.size,
        license: repo.license?.name,
        default_branch: repo.default_branch,
        has_wiki: repo.has_wiki,
        has_pages: repo.has_pages,
        archived: repo.archived,
        private: repo.private
      },
      readme: readmeContent,
      languages: languages
    };
    
  } catch (error) {
    console.error('Error fetching repo:', error);
    return null;
  }
}


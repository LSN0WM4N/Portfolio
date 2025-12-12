import { Project } from "./project";

export default function Projects() {
  return (
    <main className="w-full py-10 flex flex-col items-center">
      <h1 className="text-3xl font-semibold mb-8">Projects</h1>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center w-full px-4"
      >
        <Project
          imageUrl="/images/chat-lite.png"
          title="ChatLite"
          description="Chat developed for an tech interview"
          tecnologies={["js"]}
          repoUri="/project/ChatLite"
        />
        
        <Project
          imageUrl="/images/conway-plane.png"
          title="ConwaysLifeGame"
          description="Simple recreation of Conway's life game"
          tecnologies={["js"]}
          repoUri="/project/ConwaysLifeGame"
        />

        <Project
          imageUrl="/images/tiktaktoe.png"
          title="TickTackToe"
          description="Well knowed game Tick Tack Toe"
          tecnologies={["ts", "js", "html"]}
          repoUri="/project/TickTackToe"
        />

        <Project
          imageUrl="/images/roadmap_sh.png"
          title="Frontend projects"
          description="Projects from Roadmap.sh frontend roadmap"
          tecnologies={["html", "css", "js"]}
          repoUri="/project/ROADMAD-Projects"
        />

        <Project
          imageUrl="/images/dominos.png"
          title="Domino player"
          description="My first ever repo, a domino player for Caribean Finals ICPC 2023 challenge (3rd place)"
          tecnologies={["go"]}
          repoUri="/project/DominoPlayer"
        />

      </div>
    </main>
  );
}

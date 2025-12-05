import {
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle,
} from "flowbite-react";

import { format } from "date-fns";
import { ReactNode } from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function Experience() {
  return (
    <main className="flex flex-col items-center mx-4">
      <h1 className="text-3xl font-semibold mb-8">Experience</h1>
      
      <Timeline className="relative border-s border-default max-w-[800px]">                  
        <HistoryItem 
          title="Manivis"
          date={["August 2025", "Today"]}
          description="Development of web applications using NextJs and Express frameworks. Full stack work, multimedia management, and process optimization. "
        />

        <HistoryItem 
          title="CS Teacher Assistant"
          date={["October 2024", "June 2025"]}
          description="Training students for algorithmic competitions. Developing platforms for practicing coding. Analyzing algorithms and data structures."
        />

        <HistoryItem 
          title="Student"
          date={["September 2021", "April 2024"]}
          description="Get started with dozens of web components and interactive elements built on top of Tailwind CSS."
        >
          I combined my high school studies with programming studies, delving deeper into the study of algorithms, data structures, computational complexity, and dynamic programming. 
          During this time, I won a  
          <ExternalRef href="https://www.iberoinformatica.org/contestant_details/8313"> 
            silver medal at the OII 
          </ExternalRef>
          and 
          <ExternalRef href="https://stats.ioinformatics.org/people/8281"> 
            participated in the OII.
          </ExternalRef>
        </HistoryItem>
      </Timeline>
    </main>
  );
}

interface ExternalRefProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export function ExternalRef({ href, children, className = "" }: ExternalRefProps) {
  return (
    <>
      {" "}
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-1 text-cyan-500 hover:text-cyan-700 hover:scale-105 transition-transform ${className}`}
        >
        <span> { children } </span>
        <ExternalLink className="w-3 h-3 inline-block" />
      </Link>
      {" "}
    </>
  );
}

interface Props {
  title: string,
  date: string | Date | string[] | Date[],
  description?: string,
  children?: ReactNode;
}

function HistoryItem({
  title,
  date,
  description,
  children
}: Props) {
  if (date instanceof Date) { // OBSCURE CODE TO FORMAT DATE
    date = format(date, "LLLL yyyy")
  } else if (typeof date !== 'string') {
    date = typeof date[0] === 'string'
       ? date = date.join(" － ")
       : date = `${ format(date[0], "LLLL yyyy") } － ${ format(date[1], "LLLL yyyy") }`;
  }

  return (
    <TimelineItem>
      <TimelinePoint />
      <TimelineContent>
        <TimelineTime>{ date }</TimelineTime>
        <TimelineTitle>{ title }</TimelineTitle>
        <TimelineBody>{ description } {children }</TimelineBody>
      </TimelineContent>
    </TimelineItem>
  ); 
}


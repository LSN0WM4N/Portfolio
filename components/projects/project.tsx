import Image from "next/image";
import Link from "next/link";

import Technologies from "./tecnologies";

interface Props {
  imageUrl: string;
  title: string;
  description: string;
  tecnologies: string[] | string;
  repoUri: string;
}

export function Project({
  imageUrl,
  title,
  description,
  tecnologies,
  repoUri,
}: Props) {
  if (typeof tecnologies === "string") tecnologies = [tecnologies];

  return (
    <Link 
			href={repoUri}
			className="w-full max-w-100 mx-auto p-6 rounded-xl border border-white/10 bg-black/30 backdrop-blur-sm text-white flex gap-2"
    >
      <section className="flex flex-col justify-start gap-1">
        <Image
          src={imageUrl}
          alt={`${title}-preview-image`}
          width={90}
          height={90}
          className="rounded-lg object-contain"
        />

        <div className="text-sm text-gray-300 mt-4 w-full text-left">
          <Technologies technologies={tecnologies} size={24}/>
        </div>
      </section>

      <section className="flex flex-col justify-between">
        <div className="">
          <h2 className="text-xl font-medium tracking-wide pl-2 mb-1">
            {title}
          </h2>

          <p className="text-gray-200 text-sm leading-relaxed whitespace-pre-line mb-4">
            {description}
          </p>
        </div>

        <span className="text-cyan-500 hover:text-cyan-600 transition-colors text-right text-sm">
          Learn more...
        </span>
      </section>
    </Link>
  );
}


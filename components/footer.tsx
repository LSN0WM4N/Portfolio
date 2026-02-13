import Contact from "./footer/contact";
import Information from "./footer/information";
import { socialLinks } from "@/common/socialLinks";

export default function Footer() {
  return (
    <footer className="relative bg-black text-gray-400" id="contact">
      <div className="max-w-[1100px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <Information />
          <Contact />
        </div>

        <div className="w-full h-px bg-linear-to-r from-transparent via-neutral-700 to-transparent mb-8"></div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <p className="text-sm text-gray-500">
            {new Date().getFullYear()} Francis Rodriguez.
          </p>

          <div className="flex items-center gap-4">
            { socialLinks.map(({ icon, href, label }) => (
              <SocialLink 
                key={`${ label }-social`}
                href={ href } 
                icon={ icon }
                label={ label }
              />
            )) }
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-linear-to-r from-transparent via-cyan-500/20 to-transparent"></div>
    </footer>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="
        p-2 rounded-lg 
        bg-neutral-900/50 
        border border-neutral-800 
        text-gray-400 
        hover:text-cyan-500 
        hover:border-cyan-500/50 
        hover:bg-neutral-800
        transition-all duration-300
      "
    >
      {icon}
    </a>
  );
}
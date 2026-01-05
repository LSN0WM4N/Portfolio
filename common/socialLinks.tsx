import { SiCodeforces, SiGithub, SiTelegram } from "@icons-pack/react-simple-icons";
import { Linkedin } from "lucide-react";

export const socialLinks = [
  {
    icon: <SiGithub className="w-5 h-5" />,
    href: "https://github.com/LSN0WM4N",
    label: "GitHub",
    color: "hover:text-cyan-500"
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    href: "https://linkedin.com/in/francis-jose-rodriguez-ronda-30b433292",
    label: "LinkedIn",
    color: "hover:text-cyan-500"
  },
  {
    icon: <SiTelegram className="w-5 h-5" />,
    href: "https://t.me/LSN0WM4N",
    label: "Telegram",
    color: "hover:text-cyan-500"
  },
  {
    icon: <SiCodeforces className="w-5 h-5" />,
    href: "https://codeforces.com/profile/SN0WM4N",
    label: "Codeforces",
    color: "hover:text-cyan-500"
  }
];
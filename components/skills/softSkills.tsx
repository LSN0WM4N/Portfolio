import { Users } from "lucide-react";

export default function SoftSkills() {
	return (
    <article
      className="bg-gray-900/50 border border-white/10 rounded-xl p-6 shadow-lg"
    >
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2"><Users /> Soft skills</h2>

      <ul className="space-y-2 text-sm tracking-wide">
        <li>Team work</li>
        <li>Fast learning</li>
        <li>Optimistic</li>
        <li>Constant</li>
      </ul>
    </article>
  );
}
import Link from "next/link";
import { allProjects } from "@/lib/content";

export const metadata = { title: "Projects" };

export default function Projects() {
  return (
    <div>
      <p className="mb-3 text-xs font-medium uppercase tracking-widest text-blue-400">
        Selected Work
      </p>
      <h1 className="text-3xl font-black tracking-tight sm:text-4xl">Projects</h1>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {allProjects.map((p) => (
          <Link
            key={p.slug}
            href={p.demo ?? p.repo ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-neutral-800 p-5 transition-colors hover:border-blue-500/30 hover:bg-blue-950/10"
          >
            <div className="text-sm text-neutral-400">
              {p.stack?.join(" • ")}
            </div>
            <div className="mt-1 font-semibold">{p.title}</div>
            <div className="mt-2 text-sm text-neutral-300">{p.summary}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

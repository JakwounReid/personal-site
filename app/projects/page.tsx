import Link from "next/link";
import { allProjects } from "@/lib/content";

export const metadata = { title: "Projects" };

export default function Projects() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Projects</h1>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {allProjects.map((p) => (
          <Link
            key={p.slug}
            href={`${p.repo}`}
            className="rounded-2xl border border-neutral-800 p-5 hover:bg-neutral-900/50"
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

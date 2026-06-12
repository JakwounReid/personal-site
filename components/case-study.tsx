import Image from "next/image";

export type CaseStudy = {
  label: string;
  title: string;
  image: string;
  imageAlt: string;
  stats: string[];
  description: string;
  href: string;
  linkLabel: string;
};

export default function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <article className="overflow-hidden border border-neutral-700 bg-neutral-900">
      {/* Screenshot */}
      <div className="relative aspect-[16/9] border-b border-neutral-800">
        <Image
          src={study.image}
          alt={study.imageAlt}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 1024px, 100vw"
        />
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8">
        <p className="mb-3 text-xs font-medium uppercase tracking-widest text-blue-400">
          {study.label}
        </p>
        <h3 className="mb-4 text-xl font-black tracking-tight text-white sm:text-2xl">
          {study.title}
        </h3>

        {/* Stat callouts */}
        <div className="mb-6 grid gap-3 sm:grid-cols-3">
          {study.stats.map((stat) => (
            <div
              key={stat}
              className="border border-neutral-800 bg-neutral-950/50 p-4 text-sm font-semibold text-white"
            >
              {stat}
            </div>
          ))}
        </div>

        <p className="mb-6 text-sm text-neutral-400">{study.description}</p>

        <a
          href={study.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-blue-400 underline-offset-4 hover:underline"
        >
          {study.linkLabel}
          <svg
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </article>
  );
}

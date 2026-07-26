import Link from "next/link";
import Image from "next/image";
import IntakeForm from "./intake-form";
import { CheckIcon } from "@/components/ui";

export const metadata = {
  title: "Career Coaching — Breaking Into Tech | Jakwoun Reid",
  description:
    "1-on-1 coaching for people breaking into tech from non-traditional backgrounds. A 12-week cycle: foundation, positioning, community, momentum. Founding-cohort pricing, limited spots each cycle.",
  openGraph: {
    title: "Career Coaching — Breaking Into Tech | Jakwoun Reid",
    description:
      "1-on-1 coaching for people breaking into tech from non-traditional backgrounds. A 12-week cycle from foundation to real momentum.",
    url: "https://jakwoun.me/coaching",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Career Coaching — Breaking Into Tech | Jakwoun Reid",
    description:
      "1-on-1 coaching for people breaking into tech from non-traditional backgrounds. A 12-week cycle from foundation to real momentum.",
    images: ["/og-image.jpg"],
  },
};

const phases = [
  {
    n: "01",
    weeks: "Weeks 1–3",
    title: "Foundation",
    body: "We set the goal and take honest stock of where you are. Skills audit, then your resume and LinkedIn rebuilt so they say what you can actually do.",
  },
  {
    n: "02",
    weeks: "Weeks 4–6",
    title: "Positioning",
    body: "We build your story and the proof behind it — the specific way you talk about who you are and what you bring — and install a system that keeps you consistent.",
  },
  {
    n: "03",
    weeks: "Weeks 7–9",
    title: "Community",
    body: "We map your local tech ecosystem, prep you for events, and get you into real conversations with real people — then follow up so they lead somewhere.",
  },
  {
    n: "04",
    weeks: "Weeks 10–12",
    title: "Momentum",
    body: "Targeted outreach, interview practice, and a written blueprint you keep. You finish with a plan you can run on your own and the reps to run it.",
  },
];

const notForYou = [
  "You want a job handed to you rather than a system for finding one.",
  "You're looking for someone to write your applications and do the reaching out for you.",
  "You aren't ready to spend real hours between calls — this only works if you do the reps.",
  "You want a guarantee. I can give you a process and honest feedback, not a promise about outcomes.",
];

export default function CoachingPage() {
  return (
    <div className="space-y-20 py-6">
      {/* ── HERO ── */}
      <section className="space-y-6">
        <p className="text-xs font-medium uppercase tracking-widest text-blue-400">
          1-on-1 Career Coaching
        </p>
        <h1 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl">
          You don&apos;t need permission to work in tech.{" "}
          <span className="text-blue-400">You need a plan and someone in your corner.</span>
        </h1>
        <p className="max-w-2xl text-lg text-neutral-300">
          This is 1-on-1 coaching for people coming into tech from somewhere
          else — a different career, a bootcamp, a program, or nothing but
          nights and weekends. Over twelve weeks we turn &quot;I&apos;m trying to
          break in&quot; into a real, moving job search.
        </p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <a
            href="#apply"
            className="group inline-flex items-center gap-2 border border-blue-400 bg-blue-400 px-6 py-3 text-sm font-bold uppercase tracking-widest text-black transition-all duration-200 hover:bg-transparent hover:text-blue-400"
          >
            Apply for a Spot
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
          <a href="#program" className="text-sm text-blue-400 underline-offset-4 hover:underline">
            See how the twelve weeks work ↓
          </a>
        </div>
      </section>

      {/* ── WHO I AM (cold-arrival context) ── */}
      <section className="border-y border-neutral-800 py-10">
        <p className="mb-6 text-xs font-medium uppercase tracking-widest text-blue-400">
          Who&apos;s Coaching You
        </p>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
          <Image
            src="/profile-travel.jpg"
            alt="Jakwoun Reid"
            width={160}
            height={160}
            className="h-40 w-40 shrink-0 rounded-2xl object-cover shadow-lg"
          />
          <p className="max-w-2xl text-neutral-300">
            I&apos;m Jakwoun Reid. I came into tech through a non-traditional path
            myself — a workforce program, a lot of self-teaching — and went on to
            build software as an engineer inside a Fortune 100 company. I know
            what it&apos;s like to be on the outside looking in, and I know
            exactly what it takes to get through the door, because I did it.
          </p>
        </div>
      </section>

      {/* ── THE PROGRAM ── */}
      <section id="program" className="space-y-8">
        <div>
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-blue-400">
            The Program
          </p>
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
            Twelve weeks, four phases.
          </h2>
          <p className="mt-4 max-w-2xl text-neutral-400">
            One-on-one, over a 12-week cycle. We meet on biweekly calls, with
            async support in between so you&apos;re never stuck waiting two weeks
            to ask a question. Each phase builds on the last.
          </p>
        </div>

        <ol className="grid gap-4 sm:grid-cols-2">
          {phases.map(({ n, weeks, title, body }) => (
            <li key={n} className="border border-neutral-800 bg-neutral-900/50 p-6">
              <div className="mb-3 flex items-baseline gap-3">
                <span className="font-black text-2xl leading-none text-blue-400/40">{n}</span>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-neutral-500">
                    {weeks}
                  </p>
                  <p className="font-bold text-white">{title}</p>
                </div>
              </div>
              <p className="text-sm text-neutral-400">{body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ── WHO THIS ISN'T FOR ── */}
      <section className="space-y-6">
        <p className="text-xs font-medium uppercase tracking-widest text-blue-400">
          Read This First
        </p>
        <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
          Who this isn&apos;t for.
        </h2>
        <p className="max-w-2xl text-neutral-400">
          I&apos;d rather be straight with you now than waste your money. This
          isn&apos;t the right fit if:
        </p>
        <ul className="max-w-2xl space-y-3 text-sm text-neutral-300">
          {notForYou.map((item) => (
            <li key={item} className="flex items-start gap-3 border border-neutral-800 bg-neutral-900/50 p-4">
              <span aria-hidden className="mt-0.5 text-neutral-600">✕</span>
              {item}
            </li>
          ))}
        </ul>
        <p className="max-w-2xl text-neutral-400">
          If you read that list and thought &quot;that&apos;s not me — I&apos;ll
          do the work,&quot; then we should talk.
        </p>
      </section>

      {/* ── PRICING & SPOTS ── */}
      <section className="border border-blue-500/40 bg-blue-950/10 p-8 ring-1 ring-blue-500/20">
        <p className="mb-3 text-xs font-medium uppercase tracking-widest text-blue-400">
          Founding Cohort
        </p>
        <h2 className="mb-4 text-2xl font-black tracking-tight text-white sm:text-3xl">
          Introductory pricing for the first clients.
        </h2>
        <p className="mb-6 max-w-2xl text-neutral-300">
          I take a limited number of coaching clients each cycle so everyone gets
          real attention. Right now I&apos;m pricing this as a founding cohort —
          an introductory rate in exchange for working closely with me while the
          program is young and giving honest feedback as we go.
        </p>
        <div className="mb-6 flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span className="text-3xl font-black text-white">$600</span>
          <span className="text-lg font-medium text-neutral-500 line-through">$1,200</span>
          <span className="w-full text-sm text-neutral-500 sm:w-auto">
            Founding-cohort rate · 12-week cycle
          </span>
        </div>
        <p className="max-w-2xl text-sm text-neutral-500">
          One note on fit: I don&apos;t take current i.c.stars interns as coaching
          clients.
        </p>
      </section>

      {/* ── APPLY ── */}
      <section id="apply" className="space-y-6">
        <div>
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-blue-400">
            Apply
          </p>
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
            Tell me where you are.
          </h2>
          <p className="mt-4 max-w-2xl text-neutral-400">
            This is an application, not instant booking — spots are limited and I
            want to make sure it&apos;s a fit before either of us commits. Fill
            this out and I&apos;ll get back to you within a few days.
          </p>
        </div>
        <div className="max-w-2xl">
          <IntakeForm />
        </div>
      </section>

      {/* ── BACK LINK ── */}
      <section className="border-t border-neutral-800 pt-8">
        <Link
          href="/"
          className="text-sm font-medium text-neutral-500 underline-offset-4 hover:text-neutral-300 hover:underline"
        >
          ← Back to jakwoun.me
        </Link>
      </section>
    </div>
  );
}

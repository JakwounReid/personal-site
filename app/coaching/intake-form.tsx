"use client";

import { useState } from "react";

type FormState = "idle" | "sent";

// Coaching applications go to email for now (mailto placeholder). If a Tally form or
// Supabase-backed route is added later, swap the handleSubmit body to post to it.
export default function IntakeForm() {
  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    name: "",
    contact: "",
    background: "",
    goal: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent("Coaching Application");
    const body = encodeURIComponent(
      `Name: ${form.name}\nBest way to reach me: ${form.contact}\n\nWhere I'm coming from:\n${form.background}\n\nWhat I want out of this:\n${form.goal}`
    );
    window.location.href = `mailto:jakwoun@jakwoun.me?subject=${subject}&body=${body}`;
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "coaching_application_submit", { page: "coaching" });
    }
    setState("sent");
  }

  const inputClass =
    "w-full border border-neutral-700 bg-neutral-900 px-4 py-3 text-sm text-neutral-100 placeholder:text-neutral-600 focus:border-blue-500/60 focus:outline-none focus:ring-1 focus:ring-blue-500/30 transition-colors";
  const labelClass =
    "mb-2 block text-xs font-semibold uppercase tracking-widest text-neutral-500";

  if (state === "sent") {
    return (
      <div className="border border-blue-500/30 bg-blue-950/20 p-8 text-center">
        <p className="mb-2 text-xs font-medium uppercase tracking-widest text-blue-400">
          Application Started
        </p>
        <h3 className="text-2xl font-black tracking-tight text-white">
          Thanks for reaching out.
        </h3>
        <p className="mt-3 text-neutral-400">
          Your email client should have opened. Send it, and I&apos;ll get back
          to you within a few days about whether it&apos;s a fit.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className={labelClass}>
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="contact" className={labelClass}>
          Best way to reach you
        </label>
        <input
          id="contact"
          name="contact"
          type="text"
          required
          placeholder="Email or phone"
          value={form.contact}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="background" className={labelClass}>
          Where you&apos;re coming from
        </label>
        <textarea
          id="background"
          name="background"
          required
          rows={4}
          placeholder="What are you doing now, and what's pulling you toward tech?"
          value={form.background}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="goal" className={labelClass}>
          What you want out of this
        </label>
        <textarea
          id="goal"
          name="goal"
          required
          rows={4}
          placeholder="Where do you want to be in twelve weeks?"
          value={form.goal}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        className="group inline-flex items-center gap-2 border border-blue-400 bg-blue-400 px-8 py-4 text-sm font-bold uppercase tracking-widest text-black transition-all duration-200 hover:bg-transparent hover:text-blue-400"
      >
        Apply for a Spot
        <svg
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </button>
    </form>
  );
}

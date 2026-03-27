"use client";

import { useState } from "react";

type FormState = "idle" | "sent";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({ name: "", social: "", details: "" });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent("Editing Services Inquiry — Let's Build");
    const body = encodeURIComponent(
      `Name: ${form.name}\nSocial: ${form.social}\n\nProject Details:\n${form.details}`
    );
    window.location.href = `mailto:jakwoun@jakwoun.me?subject=${subject}&body=${body}`;
    setState("sent");
  }

  const inputClass =
    "w-full border border-neutral-700 bg-neutral-900 px-4 py-3 text-sm text-neutral-100 placeholder:text-neutral-600 focus:border-blue-500/60 focus:outline-none focus:ring-1 focus:ring-blue-500/30 transition-colors";

  if (state === "sent") {
    return (
      <div className="border border-blue-500/30 bg-blue-950/20 p-8 text-center">
        <p className="mb-2 text-xs font-medium uppercase tracking-widest text-blue-400">
          Message Sent
        </p>
        <h3 className="text-2xl font-black tracking-tight text-white">
          Talk soon.
        </h3>
        <p className="mt-3 text-neutral-400">
          Your email client should have opened. I&apos;ll reply within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-xs font-semibold uppercase tracking-widest text-neutral-500"
        >
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
        <label
          htmlFor="social"
          className="mb-2 block text-xs font-semibold uppercase tracking-widest text-neutral-500"
        >
          Social Handle / Channel
        </label>
        <input
          id="social"
          name="social"
          type="text"
          required
          placeholder="@yourhandle, youtube.com/channel, or company name"
          value={form.social}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <div>
        <label
          htmlFor="details"
          className="mb-2 block text-xs font-semibold uppercase tracking-widest text-neutral-500"
        >
          Project Details
        </label>
        <textarea
          id="details"
          name="details"
          required
          rows={5}
          placeholder="What are you creating? Who's the audience? What's the goal?"
          value={form.details}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        className="group inline-flex items-center gap-2 border border-blue-400 bg-blue-400 px-8 py-4 text-sm font-bold uppercase tracking-widest text-black transition-all duration-200 hover:bg-transparent hover:text-blue-400"
      >
        Let&apos;s Build
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

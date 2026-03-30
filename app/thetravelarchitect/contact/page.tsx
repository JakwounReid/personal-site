"use client";

import Link from "next/link";
import { useState } from "react";

const CONTACT_EMAIL = "jakwoun@jakwoun.me";

const inquiryTypes = [
  { value: "relocation", label: "Relocation consulting (PR or Milwaukee)" },
  { value: "property-shoot", label: "Property or business video shoot" },
  { value: "directory", label: "Directory listing / feature" },
  { value: "other", label: "Something else" },
];

export default function ContactPage() {
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `[Travel Architect] ${inquiryTypes.find((t) => t.value === type)?.label ?? "Inquiry"}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nType: ${inquiryTypes.find((t) => t.value === type)?.label ?? type}\n\n${message}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const filled = type && name && email && message;

  return (
    <div
      className="relative -mx-4 -mt-10 min-h-screen"
      style={{ backgroundColor: "#faf8f4" }}
    >
      <div className="mx-auto max-w-[480px] px-5 py-12">
        {/* Back link */}
        <Link
          href="/thetravelarchitect"
          className="mb-8 inline-flex items-center gap-1.5 text-xs transition-opacity hover:opacity-70"
          style={{ color: "#8c7b6b" }}
        >
          <svg
            className="h-3.5 w-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </Link>

        {/* Header */}
        <header className="mb-8">
          <h1
            className="font-serif text-2xl font-bold leading-tight"
            style={{ color: "#2c2317" }}
          >
            Work with Me
          </h1>
          <p className="mt-2 text-sm" style={{ color: "#8c7b6b" }}>
            Tell me a little about what you're looking for and I'll follow up within 48 hours.
          </p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Inquiry type */}
          <fieldset>
            <legend
              className="mb-2.5 text-xs font-semibold uppercase tracking-wider"
              style={{ color: "#2c2317" }}
            >
              What brings you here?
            </legend>
            <div className="space-y-2">
              {inquiryTypes.map(({ value, label }) => (
                <label
                  key={value}
                  className="flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-3 transition-all duration-150"
                  style={{
                    backgroundColor: type === value ? "#fdf3ea" : "#ffffff",
                    borderColor: type === value ? "#c48559" : "#e8e0d5",
                  }}
                >
                  <input
                    type="radio"
                    name="inquiry-type"
                    value={value}
                    checked={type === value}
                    onChange={() => setType(value)}
                    className="sr-only"
                  />
                  <span
                    className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border"
                    style={{
                      borderColor: type === value ? "#c48559" : "#d4c9bb",
                      backgroundColor: type === value ? "#c48559" : "transparent",
                    }}
                  >
                    {type === value && (
                      <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    )}
                  </span>
                  <span className="text-sm" style={{ color: "#2c2317" }}>
                    {label}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>

          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="mb-1.5 block text-xs font-semibold uppercase tracking-wider"
              style={{ color: "#2c2317" }}
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="w-full rounded-lg border px-4 py-3 text-sm outline-none transition-all duration-150 placeholder:text-stone-400 focus:ring-2"
              style={{
                backgroundColor: "#ffffff",
                borderColor: "#e8e0d5",
                color: "#2c2317",
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = "#c48559")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "#e8e0d5")}
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-xs font-semibold uppercase tracking-wider"
              style={{ color: "#2c2317" }}
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-lg border px-4 py-3 text-sm outline-none transition-all duration-150 placeholder:text-stone-400 focus:ring-2"
              style={{
                backgroundColor: "#ffffff",
                borderColor: "#e8e0d5",
                color: "#2c2317",
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = "#c48559")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "#e8e0d5")}
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="mb-1.5 block text-xs font-semibold uppercase tracking-wider"
              style={{ color: "#2c2317" }}
            >
              Tell me more
            </label>
            <textarea
              id="message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="A few sentences about your situation, timeline, or what you need..."
              rows={4}
              className="w-full resize-none rounded-lg border px-4 py-3 text-sm outline-none transition-all duration-150 placeholder:text-stone-400"
              style={{
                backgroundColor: "#ffffff",
                borderColor: "#e8e0d5",
                color: "#2c2317",
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = "#c48559")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "#e8e0d5")}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={!filled}
            className="w-full rounded-lg px-5 py-3.5 text-sm font-semibold transition-all duration-150 disabled:opacity-40"
            style={{
              backgroundColor: filled ? "#c48559" : "#c48559",
              color: "#faf8f4",
            }}
          >
            Send Message
          </button>
        </form>

        <p className="mt-6 text-center text-xs" style={{ color: "#a89585" }}>
          I'll reply within 48 hours.
        </p>
      </div>
    </div>
  );
}

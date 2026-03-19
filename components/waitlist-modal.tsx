"use client";

import { useState } from "react";

interface WaitlistButtonProps {
  className?: string;
  children: React.ReactNode;
}

export function WaitlistButton({ className, children }: WaitlistButtonProps) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  function handleClose() {
    setOpen(false);
    // Reset after close animation
    setTimeout(() => {
      setStatus("idle");
      setEmail("");
      setErrorMsg("");
    }, 200);
  }

  return (
    <>
      <button onClick={() => setOpen(true)} className={className}>
        {children}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          <div
            className="relative w-full max-w-md border border-neutral-800 bg-neutral-950 p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Architectural corner marks */}
            <span aria-hidden className="absolute left-2 top-2 h-3 w-3 border-l border-t border-blue-500/30" />
            <span aria-hidden className="absolute right-2 top-2 h-3 w-3 border-r border-t border-blue-500/30" />
            <span aria-hidden className="absolute bottom-2 left-2 h-3 w-3 border-b border-l border-blue-500/30" />
            <span aria-hidden className="absolute bottom-2 right-2 h-3 w-3 border-b border-r border-blue-500/30" />

            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute right-4 top-4 text-neutral-600 transition-colors hover:text-neutral-300"
              aria-label="Close"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {status === "success" ? (
              <div className="py-4 text-center">
                <div className="mx-auto mb-5 inline-flex h-12 w-12 items-center justify-center border border-blue-500/30 bg-blue-950/30">
                  <svg
                    className="h-6 w-6 text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-black tracking-tight text-white">
                  You&apos;re on the list.
                </h3>
                <p className="text-sm text-neutral-400">
                  You&apos;ll be the first to know when the 2026 Puerto Rico
                  Relocation Guide drops — with early access pricing.
                </p>
              </div>
            ) : (
              <>
                <p className="mb-1 text-xs font-medium uppercase tracking-widest text-blue-400">
                  Join the Waitlist
                </p>
                <h3 className="mb-2 text-2xl font-black tracking-tight text-white">
                  The guide is almost ready.
                </h3>
                <p className="mb-6 text-sm text-neutral-400">
                  Drop your email and you&apos;ll be first in line — with early
                  access pricing when the 2026 Puerto Rico Relocation Guide
                  launches.
                </p>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border border-neutral-700 bg-neutral-900 px-4 py-3 text-sm text-white placeholder-neutral-600 outline-none transition-colors focus:border-blue-500/60"
                  />
                  {status === "error" && (
                    <p className="text-xs text-red-400">{errorMsg}</p>
                  )}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="group inline-flex w-full items-center justify-center gap-2 border border-blue-400 bg-blue-400 px-8 py-4 text-sm font-bold uppercase tracking-widest text-black transition-all duration-200 hover:bg-transparent hover:text-blue-400 disabled:opacity-60"
                  >
                    {status === "loading" ? "Joining..." : "Notify Me"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

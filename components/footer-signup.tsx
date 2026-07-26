'use client';

import { useState } from 'react';

// Small email capture for the footer. Posts to /api/subscribe with source "footer".
export default function FooterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === 'loading') return;
    setStatus('loading');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'footer' }),
      });
      if (!res.ok) throw new Error('failed');
      setStatus('done');
      setEmail('');
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className="w-full max-w-sm">
      <p className="mb-3 text-sm text-neutral-500">
        Occasional updates on what I&apos;m building. No newsletter, no spam.
      </p>
      {status === 'done' ? (
        <p className="text-sm font-medium text-blue-400">
          You&apos;re in. Check your inbox.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-2">
          <label htmlFor="footer-email" className="sr-only">
            Email address
          </label>
          <input
            id="footer-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            className="min-w-0 flex-1 border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm text-white placeholder:text-neutral-600 focus:border-blue-400 focus:outline-none"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="shrink-0 border border-blue-400 bg-blue-400 px-4 py-2 text-xs font-bold uppercase tracking-widest text-black transition-all duration-200 hover:bg-transparent hover:text-blue-400 disabled:opacity-60"
          >
            {status === 'loading' ? '…' : 'Sign up'}
          </button>
        </form>
      )}
      {status === 'error' && (
        <p className="mt-2 text-xs text-red-400">
          Something went wrong. Try again.
        </p>
      )}
    </div>
  );
}

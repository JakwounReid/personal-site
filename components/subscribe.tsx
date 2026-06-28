'use client';

import { ArrowIcon } from '@/components/ui';

export default function Subscribe() {
  function handleClick() {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'newsletter_click', { source: 'subscribe_block' });
    }
  }

  return (
    <div className="border border-neutral-700 bg-neutral-900/50 p-6">
      <p className="mb-2 text-xs font-medium uppercase tracking-widest text-blue-400">
        The Blueprint
      </p>
      <p className="text-sm text-neutral-400">
        Strategy for builders — software, side projects, career, and life. New issues when they ship.
      </p>
      <a
        href="https://jakwounreid.beehiiv.com"
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="group mt-4 inline-flex items-center gap-2 border border-blue-400 bg-blue-400 px-6 py-3 text-sm font-bold uppercase tracking-widest text-black transition-all duration-200 hover:bg-transparent hover:text-blue-400"
      >
        Subscribe free
        <ArrowIcon />
      </a>
    </div>
  );
}

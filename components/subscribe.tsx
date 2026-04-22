'use client';

export default function Subscribe() {
  function handleClick() {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'newsletter_click', { source: 'subscribe_block' });
    }
  }

  return (
    <div className="rounded-2xl border border-neutral-700 bg-neutral-900/50 p-6">
      <h3 className="font-semibold text-white">The Blueprint</h3>
      <p className="text-sm text-neutral-400 mt-2">
        Strategy for builders — software, side projects, career, and life. One lesson, every week.
      </p>
      <a
        href="https://jakwounreid.beehiiv.com"
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="mt-4 inline-flex items-center gap-2 rounded-xl bg-white text-neutral-900 px-5 py-2.5 text-sm font-semibold hover:bg-neutral-200 transition-colors"
      >
        Subscribe free →
      </a>
    </div>
  );
}

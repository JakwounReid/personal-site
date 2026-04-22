'use client';

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

interface GtagLinkProps {
  href: string;
  event: string;
  eventParams?: Record<string, string>;
  className?: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
}

export default function GtagLink({
  href,
  event,
  eventParams,
  className,
  children,
  target,
  rel,
}: GtagLinkProps) {
  function handleClick() {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', event, eventParams ?? {});
    }
  }

  return (
    <a href={href} className={className} target={target} rel={rel} onClick={handleClick}>
      {children}
    </a>
  );
}

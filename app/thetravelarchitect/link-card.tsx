"use client";

import Link from "next/link";

interface LinkCardProps {
  href: string;
  title: string;
  description: string;
  external?: boolean;
}

export function LinkCard({ href, title, description, external }: LinkCardProps) {
  const inner = (
    <div className="flex items-center justify-between gap-4">
      <div>
        <p className="text-sm font-semibold leading-snug" style={{ color: "#2c2317" }}>
          {title}
        </p>
        <p className="mt-0.5 text-xs leading-relaxed" style={{ color: "#8c7b6b" }}>
          {description}
        </p>
      </div>
      <svg
        className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.75}
        style={{ color: "#c48559" }}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );

  const sharedClass =
    "group block w-full rounded-xl border px-5 py-4 text-left transition-all duration-200";

  const handleEnter = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.backgroundColor = "#fdf3ea";
    e.currentTarget.style.borderColor = "#c48559";
  };
  const handleLeave = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.backgroundColor = "#ffffff";
    e.currentTarget.style.borderColor = "#e8e0d5";
  };

  const baseStyle = { backgroundColor: "#ffffff", borderColor: "#e8e0d5" };

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={sharedClass}
        style={baseStyle}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        {inner}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={sharedClass}
      style={baseStyle}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {inner}
    </Link>
  );
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
      <path
        d="M12 4V14M12 14L8.5 10.5M12 14L15.5 10.5M5 18H19"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function ProfileActionBadge({ href, children }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 rounded-full border border-neutral-600 bg-black px-4 py-2 text-sm font-medium text-neutral-100 transition hover:border-neutral-400 hover:bg-neutral-800 hover:text-white"
      download={href && href !== '#' ? true : undefined}
    >
      <DownloadIcon />
      <span>{children}</span>
    </a>
  )
}

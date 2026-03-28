function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.58 2 12.22C2 16.73 4.87 20.56 8.84 21.91C9.34 22.01 9.52 21.69 9.52 21.42C9.52 21.18 9.51 20.39 9.5 19.35C6.73 19.97 6.14 17.98 6.14 17.98C5.68 16.76 5.03 16.43 5.03 16.43C4.12 15.78 5.1 15.8 5.1 15.8C6.11 15.87 6.64 16.86 6.64 16.86C7.54 18.45 8.97 17.99 9.54 17.72C9.63 17.05 9.89 16.59 10.17 16.33C7.96 16.07 5.62 15.18 5.62 11.2C5.62 10.07 6.01 9.15 6.65 8.43C6.55 8.17 6.21 7.09 6.75 5.63C6.75 5.63 7.59 5.35 9.5 6.69C10.29 6.46 11.15 6.34 12 6.34C12.85 6.34 13.71 6.46 14.5 6.69C16.41 5.35 17.25 5.63 17.25 5.63C17.79 7.09 17.45 8.17 17.35 8.43C17.99 9.15 18.38 10.07 18.38 11.2C18.38 15.19 16.03 16.06 13.81 16.32C14.16 16.64 14.47 17.27 14.47 18.23C14.47 19.61 14.46 21.07 14.46 21.42C14.46 21.69 14.64 22.02 15.15 21.91C19.13 20.56 22 16.72 22 12.22C22 6.58 17.52 2 12 2Z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M6.94 8.5H3.56V20H6.94V8.5ZM5.25 3C4.17 3 3.5 3.72 3.5 4.66C3.5 5.58 4.15 6.31 5.2 6.31H5.22C6.33 6.31 7.01 5.58 7.01 4.66C6.99 3.72 6.33 3 5.25 3ZM20.5 13.24C20.5 9.72 18.62 8.08 16.11 8.08C14.08 8.08 13.17 9.22 12.67 10.03V8.5H9.29C9.33 9.52 9.29 20 9.29 20H12.67V13.58C12.67 13.24 12.69 12.91 12.79 12.67C13.05 12.01 13.64 11.34 14.65 11.34C15.98 11.34 16.52 12.37 16.52 13.88V20H19.9V13.24H20.5Z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3.6" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.1" cy="6.9" r="1.1" fill="currentColor" />
    </svg>
  )
}

const ICONS = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  instagram: InstagramIcon,
}

export default function SocialBadge({ item }) {
  const Icon = ICONS[item.icon]

  return (
    <a
      href={item.href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-neutral-700 bg-neutral-900 text-neutral-200 transition hover:border-neutral-400 hover:bg-neutral-800 hover:text-white"
      aria-label={item.label}
      title={item.label}
    >
      {Icon ? <Icon /> : <span className="text-xs font-semibold">?</span>}
    </a>
  )
}

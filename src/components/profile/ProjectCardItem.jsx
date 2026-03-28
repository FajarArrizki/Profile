function ProjectIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="M4 7.5C4 6.67 4.67 6 5.5 6H9L10.5 8H18.5C19.33 8 20 8.67 20 9.5V16.5C20 17.33 19.33 18 18.5 18H5.5C4.67 18 4 17.33 4 16.5V7.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function ProjectCardItem({ item }) {
  return (
    <article className="rounded-3xl border border-neutral-700 bg-black/40 p-5">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-neutral-700 bg-neutral-900 text-neutral-100">
            <ProjectIcon />
          </div>
          <div>
            <p className="text-lg font-semibold text-white">{item.name}</p>
            <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">{item.status}</p>
          </div>
        </div>

        {item.href ? (
          <a
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-neutral-600 bg-neutral-900 px-3 py-1.5 text-xs font-medium text-neutral-200 transition hover:border-neutral-400 hover:bg-neutral-800 hover:text-white"
          >
            View Repo
          </a>
        ) : null}
      </div>

      <p className="mt-4 text-sm leading-7 text-neutral-300">{item.description}</p>

      {item.stack?.length ? (
        <div className="mt-5 flex flex-wrap gap-2">
          {item.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-neutral-700 bg-neutral-900 px-3 py-1 text-xs font-medium text-neutral-300"
            >
              {tech}
            </span>
          ))}
        </div>
      ) : null}
    </article>
  )
}

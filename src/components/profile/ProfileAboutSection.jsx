import { useState } from 'react'
import ProfileActionBadge from '@/components/profile/ProfileActionBadge'

export default function ProfileAboutSection({ content, cvLink }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="rounded-3xl border border-neutral-700 bg-neutral-900 p-6">
      <div className="border-b border-neutral-700 pb-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">About Me</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">Self Description</h3>
        </div>
      </div>

      <div className="mt-5">
        <p
          className={[
            'text-sm leading-7 text-neutral-300 md:text-base',
            isOpen ? '' : 'line-clamp-4',
          ].join(' ')}
        >
          {content}
        </p>
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <ProfileActionBadge href={cvLink}>Download CV</ProfileActionBadge>

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-neutral-600 bg-black text-neutral-100 transition hover:border-neutral-400 hover:bg-neutral-800 hover:text-white"
          aria-label={isOpen ? 'Show less' : 'Show more'}
          title={isOpen ? 'Show less' : 'Show more'}
        >
          <svg
            viewBox="0 0 24 24"
            className={['h-4 w-4 transition-transform', isOpen ? 'rotate-180' : 'rotate-0'].join(' ')}
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  )
}

function ReactPlaceholderIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 256 231"
      className="h-14 w-14 text-white"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M128 154.367C142.548 154.367 154.341 142.574 154.341 128.026C154.341 113.478 142.548 101.685 128 101.685C113.452 101.685 101.659 113.478 101.659 128.026C101.659 142.574 113.452 154.367 128 154.367Z"
        fill="currentColor"
      />
      <path
        d="M128 180.376C196.591 180.376 252.188 157.818 252.188 128C252.188 98.1824 196.591 75.624 128 75.624C59.4093 75.624 3.8125 98.1824 3.8125 128C3.8125 157.818 59.4093 180.376 128 180.376Z"
        stroke="currentColor"
        strokeWidth="8"
      />
      <path
        d="M71.0063 147.188C105.302 206.547 151.014 245.788 173.099 233.034C195.184 220.279 185.261 160.356 150.966 100.997C116.67 41.638 70.9578 2.39721 48.8729 15.1513C26.788 27.9055 36.7109 87.8285 71.0063 147.188Z"
        stroke="currentColor"
        strokeWidth="8"
      />
      <path
        d="M71.0062 108.813C36.7108 168.172 26.7879 228.095 48.8728 240.849C70.9577 253.603 116.67 214.362 150.965 155.003C185.261 95.644 195.184 35.721 173.099 22.9668C151.014 10.2127 105.302 49.4535 71.0062 108.813Z"
        stroke="currentColor"
        strokeWidth="8"
      />
    </svg>
  )
}

export default function NameCard({ name }) {
  return (
    <section className="overflow-hidden rounded-3xl border border-neutral-700 bg-neutral-900 shadow-2xl shadow-black/30">
      <div className="border-b border-neutral-700 bg-neutral-950 px-6 py-4">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400">Profil</p>
      </div>

      <div className="flex min-h-[320px] items-center justify-center px-6 py-10 text-center">
        <div className="space-y-4">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-neutral-600 bg-black">
            <ReactPlaceholderIcon />
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">{name}</h2>
          <p className="mx-auto max-w-2xl text-sm leading-6 text-neutral-400 md:text-base">
            Placeholder profil sederhana dengan icon React, border, dan warna hitam putih abu.
          </p>
        </div>
      </div>
    </section>
  )
}

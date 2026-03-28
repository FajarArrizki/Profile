import TechStackBadge from '@/components/profile/TechStackBadge'

export default function ProfileTechStackSection({ items }) {
  return (
    <section className="rounded-3xl border border-neutral-700 bg-neutral-900 p-6">
      <div className="border-b border-neutral-700 pb-4">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">Tech Stack</p>
        <h3 className="mt-2 text-2xl font-semibold text-white">Tools and Technologies</h3>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {items.map((item) => (
          <TechStackBadge key={item.name} item={item} />
        ))}
      </div>
    </section>
  )
}

import TechStackIcon from '@/components/profile/TechStackIcon'

export default function TechStackBadge({ item }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-neutral-700 bg-black/40 px-4 py-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-700 bg-neutral-900 text-neutral-100">
        <TechStackIcon icon={item.icon} />
      </div>
      <div>
        <p className="text-sm font-semibold text-white">{item.name}</p>
        <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">{item.type}</p>
      </div>
    </div>
  )
}

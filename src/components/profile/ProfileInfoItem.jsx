export default function ProfileInfoItem({ label, value }) {
  return (
    <article className="rounded-2xl border border-neutral-700 bg-neutral-900 p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">{label}</p>
      <p className="mt-3 text-lg font-medium text-white md:text-xl">{value}</p>
    </article>
  )
}

import ProfileSocialLinks from '@/components/profile/ProfileSocialLinks'

export default function ProfileHero({ name, imageSrc, shortDescription, socialLinks = [] }) {
  return (
    <section className="rounded-3xl border border-neutral-700 bg-neutral-950 p-6">
      <div className="flex flex-col gap-5 text-center md:flex-row md:items-start md:justify-between md:text-left">
        <div className="flex flex-col items-center gap-5 md:flex-row md:items-center">
        <div className="h-32 w-32 overflow-hidden rounded-2xl border border-neutral-700 bg-black shadow-lg shadow-black/30">
          <img src={imageSrc} alt={name} className="h-full w-full object-cover" />
        </div>

        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400">
            Profile
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">{name}</h2>
          <p className="max-w-xl text-sm leading-6 text-neutral-400 md:text-base">{shortDescription}</p>
        </div>
        </div>

        {socialLinks.length > 0 && <ProfileSocialLinks items={socialLinks} />}
      </div>
    </section>
  )
}

import SocialBadge from '@/components/profile/SocialBadge'

export default function ProfileSocialLinks({ items }) {
  return (
    <div className="flex flex-wrap justify-center gap-3 md:justify-end">
      {items.map((item) => (
        <SocialBadge key={item.label} item={item} />
      ))}
    </div>
  )
}

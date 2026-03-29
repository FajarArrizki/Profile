import ProfileAboutSection from '@/components/profile/ProfileAboutSection'
import ProfileHero from '@/components/profile/ProfileHero'
import ProfileInfoItem from '@/components/profile/ProfileInfoItem'
import ProfileProjectsSection from '@/components/profile/ProfileProjectsSection'
import ProfileTechStackSection from '@/components/profile/ProfileTechStackSection'

export default function ProfileCard({
  name,
  imageSrc,
  shortDescription,
  socialLinks = [],
  infoItems,
  about,
  cvLink,
  projectItems = [],
  techStackItems = [],
}) {
  return (
    <section className="space-y-6">
      <ProfileHero
        name={name}
        imageSrc={imageSrc}
        shortDescription={shortDescription}
        socialLinks={socialLinks}
      />

      <section className="grid gap-4 md:grid-cols-2">
        {infoItems.map((item) => (
          <ProfileInfoItem key={item.label} label={item.label} value={item.value} />
        ))}
      </section>

      {techStackItems.length > 0 && <ProfileTechStackSection items={techStackItems} />}

      <ProfileAboutSection content={about} cvLink={cvLink} />

      {projectItems.length > 0 && <ProfileProjectsSection items={projectItems} />}
    </section>
  )
}
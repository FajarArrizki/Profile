import ProfileCard from '@/components/profile/ProfileCard'
import profileImage from '../../asset/Rani.jpeg'

export default function SaharaniPage() {
  const infoItems = [
    { label: 'Full Name', value: 'Khalimatus Saharani Pramudyah' },
    { label: 'Class', value: 'TIA' },
    { label: 'Major / Study Program', value: 'Information Technology' },
    { label: 'Domicile', value: 'Malang, East Java' },
  ]

  const techStackItems = [
    { name: 'HTML', icon: 'html', type: 'Markup' },
    { name: 'CSS', icon: 'css', type: 'Styling' },
    { name: 'React', icon: 'react', type: 'Library' },
  ]

  const projectItems = [
    {
      name: 'Personal Profile Website',
      status: 'Featured Project',
      href: '#',
      description:
        'A simple personal profile website built using React and Tailwind CSS. This project focuses on creating a clean, responsive, and user-friendly interface while practicing component-based architecture and modern frontend development techniques.',
      stack: ['React', 'Tailwind CSS'],
    },
  ]

  const about =
    'I am an Information Technology student who has a strong interest in web development. I have basic skills in HTML, CSS, and React, and I enjoy creating simple, clean, and responsive user interfaces. I am always interested in learning new things, especially related to frontend development, and I like to improve my coding skills step by step. In my learning process, I try to understand not only how to make something work, but also how to make it look good and easy to use. I also enjoy working in a team because it allows me to share ideas, learn from others, and gain new experiences. Although I am still in the learning stage, I am motivated to keep growing and developing my skills so that I can become a better frontend developer in the future.'

  const shortDescription =
    'Information Technology student who is passionate about web development, UI design, and modern digital experiences.'

  const socialLinks = [
    { label: 'GitHub', href: '#', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/khalimatus-saharani-pramudyah-382bb1377?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', icon: 'linkedin' },
    { label: 'Instagram', href: 'https://www.instagram.com/raniiii.sh?igsh=MWxnZXJwd2h2NDgwNg==', icon: 'instagram' },
  ]

  const cvLink = '#'

  return (
      <ProfileCard
        name="Khalimatus Saharani Pramudyah"
        imageSrc={profileImage}
        shortDescription={shortDescription}
        socialLinks={socialLinks}
        infoItems={infoItems}
        about={about}
        cvLink={cvLink}
        projectItems={projectItems}
        techStackItems={techStackItems}
      />
  )
}
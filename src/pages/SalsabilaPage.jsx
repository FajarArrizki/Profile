import ProfileCard from '@/components/profile/ProfileCard'
import profileImage from '../../asset/salsabila.jpeg'

export default function SalsabilaPage() {
  const infoItems = [
    { label: 'Full Name', value: 'Salsabila Khairunnisa Lumbantobing' },
    { label: 'Class', value: 'TIA' },
    { label: 'Major / Study Program', value: 'Information Technology' },
    { label: 'Domicile', value: 'Makassar, South Sulawesi' },
  ]

  const techStackItems = [
    { name: 'HTML', icon: 'html', type: 'Markup' },
    { name: 'CSS', icon: 'css', type: 'Styling' },
    { name: 'JavaScript', icon: 'javascript', type: 'Language' },
    { name: 'React', icon: 'react', type: 'Library' },
  ]

  const projectItems = [
    {
      name: 'Personal Profile Page',
      status: 'Simple Project',
      href: 'https://github.com/FajarArrizki/Profile',
      description:
        'This project is a personal profile page built using React and Tailwind CSS. It serves as a platform to showcase personal information in a clean and structured way while practicing basic frontend development concepts',
      stack: ['React', 'Tailwind CSS'],
    },
  ]

   const about =
    'I am an Information Technology student who is currently learning and exploring the world of web development. I have an interest in creating simple and clean user interfaces that are easy to use and visually appealing. In my learning process, I focus on understanding the basics first, such as HTML, CSS, and JavaScript, before moving on to frameworks like React. I enjoy trying new things and improving my skills step by step through small projects and practice. For me, learning programming is not only about writing code, but also about solving problems and thinking logically. I hope to continue developing my skills and become a better developer who can create useful and meaningful digital products in the future.'

  const shortDescription =
    'Information Technology student who is learning web development and building simple, clean, and user-friendly interfaces.'

  const socialLinks = [
    { label: 'GitHub', href: 'https://github.com/salsalll274', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/salsabila-lumbantobing-66a7a4377?utm_source=share_via&utm_content=profile&utm_medium=member_android', icon: 'linkedin' },
    { label: 'Instagram', href: 'https://www.instagram.com/slsa.kl?igsh=MXFrNjJlbG43cW50Yw==', icon: 'instagram' },
  ]

  const cvLink = '#'

  return (
    <ProfileCard
      name="Salsabila Khairunnisa Lumbantobing"
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

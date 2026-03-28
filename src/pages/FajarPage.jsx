import ProfileCard from '@/components/profile/ProfileCard'
import fajarImage from '../../asset/FajaArrizki.jpeg'

export default function FajarPage() {
  const infoItems = [
    { label: 'Full Name', value: 'Fajar Arrizki' },
    { label: 'Class', value: 'TIA' },
    { label: 'Major / Study Program', value: 'Information Technology' },
    { label: 'Domicile', value: 'Kuningan, West Java' },
  ]

  const techStackItems = [
    { name: 'TypeScript', icon: 'typescript', type: 'Language' },
    { name: 'React', icon: 'react', type: 'Library' },
    { name: 'Solidity', icon: 'solidity', type: 'Smart Contract' },
    { name: 'Python', icon: 'python', type: 'Language' },
    { name: 'HTML', icon: 'html', type: 'Markup' },
    { name: 'CSS', icon: 'css', type: 'Styling' },
    { name: 'Next.js', icon: 'next', type: 'Framework' },
    { name: 'Vite', icon: 'vite', type: 'Build Tool' },
  ]

  const projectItems = [
    {
      name: 'MCP Technical Analysis',
      status: 'Featured Project',
      href: 'https://github.com/FajarArrizki/mcp-technical-analysis',
      description:
        'A Model Context Protocol server project focused on AI-powered cryptocurrency analysis. This project connects AI assistants with market analysis workflows, real-time data, technical indicators, and trading-related insights in a structured and reusable way.',
      stack: ['TypeScript', 'Node.js', 'MCP', 'Crypto Analysis'],
    },
  ]

  const about =
    'I am an Information Technology student with a strong interest in web development, software engineering, and learning modern technologies that can solve real problems. I enjoy studying how digital products are built, starting from interface design and user experience to application structure and code organization. In my learning process, I like to explore React, Tailwind CSS, TypeScript, and other tools that help me create interfaces that are clean, responsive, and easy to maintain. I also have curiosity about backend systems, smart contracts, and the way different technologies can work together in one project. For me, building a project is not only about making it work, but also about making the code structured, reusable, and easier to understand by other people in the team. I want to keep improving my technical skills, communication skills, and problem-solving ability so that I can contribute better in collaborative projects and continue growing as a developer in the future.'

  const shortDescription =
    'Information Technology student with a strong interest in web development, modular UI design, and modern frontend tools.'

  const socialLinks = [
    { label: 'GitHub', href: 'https://github.com/FajarArrizki', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/fajar-arrizki/', icon: 'linkedin' },
    { label: 'Instagram', href: 'https://www.instagram.com/ux.fajar/', icon: 'instagram' },
  ]

  const cvLink = '#'

  return (
    <ProfileCard
      name="Fajar Arrizki"
      imageSrc={fajarImage}
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

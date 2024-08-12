'use client'
import Image from 'next/image'
import React, {FC} from 'react'
import imgOne from '../../public/assets/images/linkedin (2).png'
import imgTwo from '../../public/assets/images/wellness-retreat.png'
import imgThree from '../../public/assets/images/pexels.png'
import imgFour from '../../public/assets/images/walmartClone.png'
import imgFive from '../../public/assets/images/gxber.png'
import imgSix from '../../public/assets/images/wedding-landing-page.png'
import imgSeven from '../../public/assets/images/E-product-page.png'
import imgEight from '../../public/assets/images/staking-dapp.png'
import imgNine from '../../public/assets/images/astra.png'
import imgTen from '../../public/assets/images/testimonial.png'
import {RiNextjsLine} from 'react-icons/ri'
import {RiReactjsFill} from 'react-icons/ri'
import {TbBrandTypescript} from 'react-icons/tb'
import {FaSass} from 'react-icons/fa'
import {AiOutlineHtml5} from 'react-icons/ai'
import {SiTailwindcss} from 'react-icons/si'
import {SiFirebase} from 'react-icons/si'

interface CustomComponentProps {
  id: string
}

const projectCardInfo = [
  {
    id: 1,
    deployUrl: 'https://linked-in-clone-one-im7i.vercel.app/',
    src: imgOne,
    projectTitle: 'LinkedIn Clone',
    technologies: [
      {id: 1, icons: <RiNextjsLine />},
      {id: 2, icons: <RiReactjsFill />},
      {id: 3, icons: <TbBrandTypescript />},
      {id: 4, icons: <FaSass />},
      {id: 5, icons: <AiOutlineHtml5 />},
      {id: 6, icons: <SiFirebase />},
    ],
    gitHubLink: 'https://github.com/mounikagonti/linkedIn-clone-one',
    demoURL: 'https://linked-in-clone-one-im7i.vercel.app/',
    statement: 'This is a wedding landing page built with Next.js and React.',
    description: 'LinkedIn clone with login authentication and using firebase.',
    date: '2024-07-20',
    contributors: ['Mounika Gonti'],
  },
  {
    id: 2,
    deployUrl: 'https://retreats-info.netlify.app/',
    src: imgTwo,
    projectTitle: 'Wellness Retreats',
    technologies: [
      {id: 1, icons: <RiNextjsLine />},
      {id: 2, icons: <RiReactjsFill />},
      {id: 3, icons: <TbBrandTypescript />},
      {id: 4, icons: <SiTailwindcss />},
      {id: 5, icons: <AiOutlineHtml5 />},
    ],
    gitHubLink: 'https://github.com/mounikagonti/wellness-retreat',
    demoURL: 'https://retreats-info.netlify.app/',
    statement: 'This is a wedding landing page built with Next.js and React.',
    description: 'Wellness retreat landing page implemented using REST API.',
    date: '2024-07-20',
    contributors: ['Mounika Gonti'],
  },
  {
    id: 3,
    deployUrl: 'https://pexels-clone-rouge.vercel.app/',
    src: imgThree,
    projectTitle: 'Pexels Clone',
    technologies: [
      {id: 1, icons: <RiNextjsLine />},
      {id: 2, icons: <RiReactjsFill />},
      {id: 3, icons: <TbBrandTypescript />},
      {id: 4, icons: <FaSass />},
      {id: 5, icons: <AiOutlineHtml5 />},
    ],
    gitHubLink: 'https://github.com/mounikagonti/pexels-clone',
    demoURL: 'https://pexels-clone-rouge.vercel.app/',
    statement: 'This is a wedding landing page built with Next.js and React.',
    description: 'Pexels clone implemented with search functionality.',
    date: '2024-07-20',
    contributors: ['Mounika Gonti'],
  },
  {
    id: 4,
    deployUrl: 'https://walmart-clone-seven.vercel.app/',
    src: imgFour,
    projectTitle: 'Walmart Clone',
    technologies: [
      {id: 1, icons: <RiNextjsLine />},
      {id: 2, icons: <RiReactjsFill />},
      {id: 3, icons: <TbBrandTypescript />},
      {id: 4, icons: <FaSass />},
      {id: 5, icons: <AiOutlineHtml5 />},
    ],
    gitHubLink: 'https://github.com/mounikagonti/walmart-clone',
    demoURL: 'https://walmart-clone-seven.vercel.app/',
    statement: 'This is a wedding landing page built with Next.js and React.',
    description:
      'Walmart clone with key functionalities to replicate the user experience of the original website.',
    date: '2024-07-20',
    contributors: ['Mounika Gonti'],
  },
  {
    id: 5,
    deployUrl: 'https://gxber-c.netlify.app/',
    src: imgFive,
    projectTitle: 'GXBER',
    technologies: [
      {id: 1, icons: <RiNextjsLine />},
      {id: 2, icons: <RiReactjsFill />},
      {id: 3, icons: <TbBrandTypescript />},
      {id: 4, icons: <FaSass />},
      {id: 5, icons: <AiOutlineHtml5 />},
    ],
    gitHubLink: 'https://github.com/mounikagonti/gxber',
    demoURL: 'https://gxber-c.netlify.app/',
    statement: 'This is a wedding landing page built with Next.js and React.',
    description:
      'GXBER application with stunning animations and a fully responsive design.',
    date: '2024-07-20',
    contributors: ['Mounika Gonti'],
  },
  {
    id: 6,
    deployUrl: 'https://wedding-landding-page-with-nextjs-react-js.vercel.app/',
    src: imgSix,
    projectTitle: 'Wedding Landing Page',
    technologies: [
      {id: 1, icons: <RiNextjsLine />},
      {id: 2, icons: <RiReactjsFill />},
      {id: 3, icons: <TbBrandTypescript />},
      {id: 4, icons: <FaSass />},
      {id: 5, icons: <AiOutlineHtml5 />},
    ],
    gitHubLink:
      'https://github.com/mounikagonti/Wedding-Landding-Page-with-nextjs-react-js.',
    demoURL: 'https://wedding-landding-page-with-nextjs-react-js.vercel.app/',
    statement: 'This is a wedding landing page built with Next.js and React.',
    description:
      'A captivating wedding landing page with a fully responsive design.',
    date: '2024-07-20',
    contributors: ['Mounika Gonti'],
  },
  {
    id: 7,
    deployUrl: 'https://ecommerce-product-page-eight-delta.vercel.app/',
    src: imgSeven,
    projectTitle: 'Ecommerce Product Page',
    technologies: [
      {id: 1, icons: <RiNextjsLine />},
      {id: 2, icons: <RiReactjsFill />},
      {id: 3, icons: <TbBrandTypescript />},
      {id: 4, icons: <FaSass />},
      {id: 5, icons: <AiOutlineHtml5 />},
    ],
    gitHubLink: 'https://github.com/mounikagonti/Ecommerce-product-page',
    demoURL: 'https://ecommerce-product-page-eight-delta.vercel.app/',
    statement: 'This is a wedding landing page built with Next.js and React.',
    description:
      'Explore fully responsive e-product page and offering a stunning visual experience.',
    date: '2024-07-20',
    contributors: ['Mounika Gonti'],
  },
  {
    id: 8,
    deployUrl: 'https://staking-dapp-bice.vercel.app/',
    src: imgEight,
    projectTitle: 'Staking dApp',
    technologies: [
      {id: 1, icons: <RiNextjsLine />},
      {id: 2, icons: <RiReactjsFill />},
      {id: 3, icons: <TbBrandTypescript />},
      {id: 4, icons: <FaSass />},
      {id: 5, icons: <AiOutlineHtml5 />},
    ],
    gitHubLink: 'https://github.com/mounikagonti/staking-dapp',
    demoURL: 'https://staking-dapp-bice.vercel.app/',
    statement: 'This is a wedding landing page built with Next.js and React.',
    description:
      'Staking dApp with robust functionality and a seamless, responsive interface for any device.',
    date: '2024-07-20',
    contributors: ['Mounika Gonti'],
  },
  {
    id: 9,
    deployUrl: 'https://astra-task.netlify.app/',
    src: imgNine,
    projectTitle: 'Astra',
    technologies: [
      {id: 2, icons: <RiReactjsFill />},
      {id: 3, icons: <TbBrandTypescript />},
      {id: 4, icons: <FaSass />},
      {id: 5, icons: <AiOutlineHtml5 />},
    ],
    gitHubLink: 'https://github.com/mounikagonti/astra-task',
    demoURL: 'https://astra-task.netlify.app/',
    statement: 'This is a wedding landing page built with Next.js and React.',
    description:
      'Astra with robust functionality and a seamless, responsive interface for any device.',
    date: '2024-07-20',
    contributors: ['Mounika Gonti'],
  },
  {
    id: 10,
    deployUrl: 'https://testimonials-grid-section-xi-six.vercel.app/',
    src: imgTen,
    projectTitle: 'Testimonial',
    technologies: [
      {id: 1, icons: <RiNextjsLine />},
      {id: 2, icons: <RiReactjsFill />},
      {id: 3, icons: <TbBrandTypescript />},
      {id: 4, icons: <FaSass />},
      {id: 5, icons: <AiOutlineHtml5 />},
    ],
    gitHubLink: 'https://github.com/mounikagonti/Testimonials-grid-section',
    demoURL: 'https://testimonials-grid-section-xi-six.vercel.app/',
    statement: 'This is a wedding landing page built with Next.js and React.',
    description:
      'A fully responsive, grid-style testimonial app that looks great on any device.',
    date: '2024-07-20',
    contributors: ['Mounika Gonti'],
  },
]

const ProjectCard: React.FC<CustomComponentProps> = ({id}) => {
  const handleProjectClick = (url: string) => {
    window.open(url, '_blank')
  }

  return (
    <section>
      <div className='container'>
        <h1 className='section_title'>
          Latest <span> Projects</span>
        </h1>
        {projectCardInfo.map((project) => (
          <div className='projectCard_wrapper' key={project.id} id={id}>
            <h1 className='anta-regular'>{project.projectTitle}</h1>
            <div className='projectCard'>
              <div className='project_box'>
                <Image
                  onClick={() => handleProjectClick(project.deployUrl)}
                  role='button'
                  tabIndex={0}
                  className='projectImg'
                  src={project.src}
                  alt={project.projectTitle}
                  fill
                />
              </div>
              <div className='project_info'>
                <div className='tech_icons'>
                  {project.technologies.map((tech) => (
                    <span key={tech.id}>{tech.icons}</span>
                  ))}
                </div>
                <p className='project-description'>{project.description}</p>
                <div className='button_wrapper'>
                  <button
                    className='glow-on-hover'
                    onClick={() => window.open(project.gitHubLink, '_blank')}
                  >
                    Github
                  </button>
                  <button
                    className='glow-on-hover'
                    onClick={() => window.open(project.demoURL, '_blank')}
                  >
                    Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProjectCard

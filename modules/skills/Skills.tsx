import React from 'react'
import {ImHtmlFive2} from 'react-icons/im'
import {FaCss3Alt, FaSass} from 'react-icons/fa'
import {IoLogoJavascript} from 'react-icons/io'
import {GrReactjs} from 'react-icons/gr'
import {
  TbBrandNextjs,
  TbBrandTypescript,
  TbBrandBootstrap,
} from 'react-icons/tb'
import {SiRedux, SiTailwindcss} from 'react-icons/si'
import {BsGithub} from 'react-icons/bs'
import {BiLogoVisualStudio} from 'react-icons/bi'

const Skills = ({id}: any) => {
  const skillsArray = [
    {
      id: 1,
      icon: <ImHtmlFive2 />,
      name: 'HTML',
      // description:
      //   'HTML is the standard markup language for creating Web pages, It defines the meaning and structure of web content.',
    },
    {
      id: 2,
      icon: <FaCss3Alt />,
      name: 'CSS',
      // description:
      //   'CSS is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.',
    },
    {
      id: 3,
      icon: <FaSass />,
      name: 'SASS',
      // description:
      //   'Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets.',
    },
    {
      id: 4,
      icon: <IoLogoJavascript />,
      name: 'JS',
      // description:
      //   'JavaScript,is a programming language that is one of the core technologies of the World Wide Web.',
    },
    {
      id: 5,
      icon: <GrReactjs />,
      name: 'React js',
      // description:
      //   'React is a free and open-source front-end JavaScript library for building user interfaces based on components.',
    },
    {
      id: 6,
      icon: <TbBrandNextjs />,
      name: 'Next js',
      // description:
      //   'Next.js is a React framework that gives you building blocks to create web applications.',
    },
    {
      id: 7,
      icon: <SiRedux />,
      name: 'RTK',
      // description:
      //   'Redux is an open-source JavaScript library for managing and centralizing application state.',
    },
    {
      id: 8,
      icon: <SiTailwindcss />,
      name: 'TailwindCSS',
      // description:
      //   'Tailwind CSS is basically a utility-first CSS framework for rapidly building custom user interfaces.',
    },
    {
      id: 9,
      icon: <TbBrandTypescript />,
      name: 'TS',
      // description:
      //   'TypeScript is a open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript.',
    },
    {
      id: 10,
      icon: <TbBrandBootstrap />,
      name: 'Bootstrap',
      // description:
      //   'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.',
    },
    {
      id: 11,
      icon: <BsGithub />,
      name: 'GitHub',
      // description:
      //   'GitHub, is a platform and cloud-based service for software development and version control using Git, allowing developers to store and manage their code.',
    },
    {
      id: 12,
      icon: <BiLogoVisualStudio />,
      name: 'vs code',
      // description:
      //   'Visual Studio Code is a code editor redefined and optimized for building and debugging modern web and cloud applications.',
    },
  ]

  return (
    <div className='skills' id={id}>
      <h1>
        Skill <span>-Set</span>
      </h1>
      <div className='programming_skills'>
        {skillsArray.map((item: any) => (
          <div className='programming_skill_content' key={item.id}>
            <div className='skill_icon'>
              <div className='icon'>{item.icon}</div>
            </div>
            <div className='skill_name'>{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills

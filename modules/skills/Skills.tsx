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
import {VscVscode} from 'react-icons/vsc'
import {SiRedux, SiTailwindcss} from 'react-icons/si'
import {BsGithub} from 'react-icons/bs'
import {SiReactquery} from 'react-icons/si'
import {SiMui} from 'react-icons/si'
import {SiFirebase} from 'react-icons/si'

const Skills = ({id}: any) => {
  const skillsArray = [
    {
      id: 1,
      icon: <ImHtmlFive2 />,
      name: 'HTML',
    },
    {
      id: 2,
      icon: <FaCss3Alt />,
      name: 'CSS',
    },
    {
      id: 3,
      icon: <FaSass />,
      name: 'SASS',
    },
    {
      id: 4,
      icon: <IoLogoJavascript />,
      name: 'JavaScript',
    },
    {
      id: 5,
      icon: <GrReactjs />,
      name: 'React js',
    },
    {
      id: 6,
      icon: <TbBrandNextjs />,
      name: 'Next js',
    },
    {
      id: 7,
      icon: <SiRedux />,
      name: 'Redux Toolkit',
    },
    {
      id: 8,
      icon: <SiTailwindcss />,
      name: 'TailwindCSS',
    },
    {
      id: 9,
      icon: <TbBrandTypescript />,
      name: 'Typescript',
    },

    {
      id: 10,
      icon: <TbBrandBootstrap />,
      name: 'Bootstrap',
    },
    {
      id: 11,
      icon: <BsGithub />,
      name: 'GitHub',
    },
    {
      id: 12,
      icon: <VscVscode />,
      name: 'vs code',
    },
    {
      id: 13,
      icon: <SiReactquery />,
      name: 'React query',
    },
    {
      id: 14,
      icon: <SiMui />,
      name: 'Material UI',
    },
    {
      id: 15,
      icon: <SiFirebase />,
      name: 'Firebase',
    },
  ]

  return (
    <div className='skills' id={id}>
      <h1 className='section_title'>Things I code with</h1>
      <div className='programming_skills'>
        {skillsArray.map((item: any) => (
          <div className='programming_skill_content' key={item.id}>
            <div className='skill_icon'>
              <div className='icon'>{item.icon}</div>
              <span className='tooltip'>{item.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills

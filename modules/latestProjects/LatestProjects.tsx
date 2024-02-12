import Image from 'next/image'
import React from 'react'
import imgOne from '../../public/assets/images/linkedin (2).png'
import imgTwo from '../../public/assets/images/chatgpt.png'
import imgThree from '../../public/assets/images/spidynft.png'
import imgFour from '../../public/assets/images/tesla.png'
import imgFive from '../../public/assets/images/frontendquizapp.png'
import imgSix from '../../public/assets/images/mobilepresentaion.png'

const LatestProjects = ({id}: any) => {
  return (
    <div className='projects' id={id}>
      <h1>
        Latest
        <span>Projects</span>
      </h1>
      <div className='project_container'>
        <div className='project_box'>
          <a
            href='https://linked-in-clone-one-im7i.vercel.app'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image className='projectImg' src={imgOne} alt='projectOne' />
          </a>
        </div>
        <div className='project_box'>
          <a
            href='https://chatgpt-clone-three-delta.vercel.app/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image className='projectImg' src={imgTwo} alt='projectOne' />
          </a>
        </div>
        <div className='project_box'>
          <a
            href='https://spidey-nft.vercel.app/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image className='projectImg' src={imgThree} alt='projectOne' />
          </a>
        </div>
        <div className='project_box'>
          <a
            href='https://tesla-clone-ten-chi.vercel.app/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image className='projectImg' src={imgFour} alt='projectOne' />
          </a>
        </div>
        <div className='project_box'>
          <a
            href='https://frontend-quiz-app-six.vercel.app/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image className='projectImg' src={imgFive} alt='projectOne' />
          </a>
        </div>
        <div className='project_box'>
          <a
            href='https://mobile-app-presentation-jjiw.vercel.app/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image className='projectImg' src={imgSix} alt='projectOne' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default LatestProjects

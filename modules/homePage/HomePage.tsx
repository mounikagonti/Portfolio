import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {AiFillGithub, AiFillLinkedin, AiFillInstagram} from 'react-icons/ai'
import profilePic from '../../public/assets/images/mounikagonti.jpeg'

const HomePage = ({id}: any) => {
  return (
    <div className='homepage_container'>
      <div className='homepage' id={id}>
        <div className='homepage_left'>
          <h3>UI ALCHEMIST</h3>
          <h1>Frontend Developer</h1>
          <p className='home_content'>
            I&apos;m your pixel magician! ✨ Crafting interfaces that captivate like
            Martian landscapes & convert like space lasers. Let&apos;s make your
            vision legendary!. Ready to see your vision come alive? Let&apos;s chat!
          </p>
          {/* <div className='social_media'>
            <Link
              href={'https://github.com/mounikagonti'}
              className='social_media_icon'
            >
              <AiFillGithub />
            </Link>
            <Link
              href={'https://www.linkedin.com/in/mounika-gonti-318074183/'}
              className='social_media_icon'
            >
              <AiFillLinkedin />
            </Link>
            <Link
              href={'https://www.instagram.com/mounika_halde/'}
              className='social_media_icon'
            >
              <AiFillInstagram />
            </Link>
          </div> */}
          <a href='/assets/mounikagonti.pdf' target='_blank' download={true}>
            <button className='glow-on-hover' type='button'>
              Download CV
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default HomePage

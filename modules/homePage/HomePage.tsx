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
          <h3>Hello, I am</h3>
          <h1>Mounika Gonti</h1>
          <p className='home_content'>
            Welcome to my world of web development! I am a Front-End Web
            Developer who builds the front portion of websites that customers,
            guests, or clients use on a daily basis.
          </p>
          <div className='social_media'>
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
          </div>
          <a href='/assets/mounikagonti.pdf' target='_blank' download={true}>
            <button className='cv'>Download CV</button>
          </a>
        </div>
        <div className='homepage_right'>
          <div className='homepage_profile'>
            <Image
              className='homepage_profile_img'
              alt='Profile'
              src={profilePic}
              style={{borderRadius: '50%'}}
              // src={'https://avatars.githubusercontent.com/u/65850961?v=4'}
            />
          </div>
          {/* <div className='profession_box'>
          <div className='profession'>
            <h3>web developer</h3>
          </div>
          <div className='profession'>
            <h3>UI/UX developer</h3>
          </div>
          <div className='profession' style={{"'--i:any'": 0}}>
            <h3>Frontend developer</h3>
          </div>
          <div className='profession'>
            <h3>web designer</h3>
          </div>
        </div> */}
        </div>
      </div>
    </div>
  )
}

export default HomePage

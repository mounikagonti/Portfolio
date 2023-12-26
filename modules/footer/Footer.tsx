import {link} from 'fs'
import Link from 'next/link'
import React from 'react'
import {AiFillGithub, AiFillInstagram, AiFillLinkedin} from 'react-icons/ai'

const Footer = () => {
  const socialLinks = [
    {
      id: 1,
      icon: <AiFillGithub />,
      link: 'https://github.com/mounikagonti',
    },
    {
      id: 2,
      icon: <AiFillLinkedin />,
      link: 'https://www.linkedin.com/in/mounika-gonti-318074183/',
    },
    {
      id: 3,
      icon: <AiFillInstagram />,
      link: 'https://www.instagram.com/mounika_halde/',
    },
  ]
  return (
    <div className='footer'>
      <div className='footer_top'>
        {socialLinks.map((item: any) => (
          <Link key={item.id} href={item.link} className='social_link_icon'>
            {item.icon}
          </Link>
        ))}
      </div>
      <hr />
      <div className='footer_bottom'>
        &copy; Copyright 2023 Mounika Gonti - All Rights Received
      </div>
    </div>
  )
}

export default Footer

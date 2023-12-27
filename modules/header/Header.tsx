// import Image from 'next/image'
import {useWindowSize} from '@/hooks/useWindowSize'
import Link from 'next/link'
import {useRouter} from 'next/router'
import React, {useEffect, useRef, useState} from 'react'
import {IoMdClose} from 'react-icons/io'
import {IoMdMenu} from 'react-icons/io'

type navItem = {
  id: number
  title: string
  isActive: boolean
}

const headerRight: navItem[] = [
  {
    id: 1,
    title: 'Home',
    isActive: true,
  },
  {
    id: 2,
    title: 'About',
    isActive: false,
  },
  {
    id: 3,
    title: 'Projects',
    isActive: false,
  },
  {
    id: 4,
    title: 'Skills',
    isActive: false,
  },
  {
    id: 5,
    title: 'Contact',
    isActive: false,
  },
]

const Header = () => {
  const [menu, setMenu] = useState(false)
  const [menuItems, setMenuItems] = useState<navItem[]>(headerRight)
  const {windowSize} = useWindowSize()
  // const router = useRouter()
  const sidebarRef = useRef<any>(null)

  const isMobileDevice = windowSize?.width < 768

  const handleOnMenuClick = () => {
    setMenu((prev) => !prev)
  }

  // const handleOnNavlinkClick = () => {
  //   setMenu(false)
  // }

  // const scrollToRef = (ref: any) => {
  //   if (ref.current) {
  //     ref.current.scrollIntoView({behavior: 'smooth'})
  //   }
  // }

  const closeSidebarOutsideClick = (event: any) => {
    console.log(!sidebarRef.current.contains(event.target), 'sidebar')
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setMenu(false)
      console.log(menu, 'menu')
    }
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({behavior: 'smooth'})
    }
  }

  const handleNavigation = (id: number, value: string) => {
    setMenuItems((prev: navItem[]) => {
      const updatedMenuItems: navItem[] = prev.map((item) => {
        if (item.id === id) {
          // Create a new object with updated properties for the matched item
          return {...item, isActive: true}
        }
        return {...item, isActive: false}
      })

      return updatedMenuItems // Return the updated state
    })
    scrollToSection(value)
    setMenu(false)
  }

  useEffect(() => {
    document.addEventListener('mousedown', closeSidebarOutsideClick)

    return () => {
      document.removeEventListener('mousedown', closeSidebarOutsideClick)
    }
  })

  return (
    <div className='header_container'>
      <div className='header'>
        <div className='header_left'>
          <div className='name'>Mounika Gonti</div>
        </div>
        <nav
          ref={sidebarRef}
          className={
            isMobileDevice && menu
              ? 'header_right_mobile visible'
              : 'header_right'
          }
        >
          {menuItems.map((item) => (
            <p
              key={item.id}
              className={item.isActive ? 'link active' : 'link'}
              onClick={() =>
                handleNavigation(item?.id, item?.title?.toLowerCase())
              }
            >
              {item.title}
            </p>
          ))}
        </nav>
        {isMobileDevice && (
          <div className='btn_wrapper'>
            {!menu ? (
              <div onClick={handleOnMenuClick} className='header_btn'>
                <IoMdMenu />
              </div>
            ) : (
              <div onClick={handleOnMenuClick} className='header_btn'>
                <IoMdClose />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default Header

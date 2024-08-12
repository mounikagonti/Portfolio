import useMounted from '@/hooks/useIsMounted'
import Link from 'next/link'
import React, {useRef, useState} from 'react'
import {FaGithub} from 'react-icons/fa6'
import {FaInstagram} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa6'
import {AiOutlineMail} from 'react-icons/ai'
import {BsTelephone} from 'react-icons/bs'
import {FcHome, FcPhoneAndroid} from 'react-icons/fc'
import {SiGmail} from 'react-icons/si'
import {SlLocationPin} from 'react-icons/sl'
import emailjs from '@emailjs/browser'
import {useForm} from 'react-hook-form'
import {SubmitHandler} from 'react-hook-form'
import SubmitModel from '../submitModel/SubmitModel'

const contactInfoIcons = [
  {
    id: 2,
    icon: <SlLocationPin />,
    boldText: 'Location',
    smallText: 'Hyderabad, India',
  },
  {
    id: 3,
    icon: <BsTelephone />,
    boldText: 'Phone Number',
    smallText: '9701866010',
  },
  {
    id: 1,
    icon: <AiOutlineMail />,
    boldText: 'Chart to me',
    smallText: 'hmounika1997@gmail.com',
  },
]
const socialLinkIcons = [
  {
    id: 1,
    icon: <FaGithub />,
    link: 'https://github.com/mounikagonti',
  },
  {
    id: 2,
    icon: <FaLinkedin />,
    link: 'https://www.linkedin.com/in/mounika-gonti-318074183/',
  },
  {
    id: 3,
    icon: <FaInstagram />,
    link: 'https://www.instagram.com/mounika_halde/',
  },
]

const ContactInfo = ({id}: any) => {
  const isMounted = useMounted()
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const formRef = useRef<HTMLFormElement | null>(null)
  const submitModelRef = useRef<HTMLDivElement | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  type FormValues = {
    username: string
    email: string
    message: string
  }

  const from = useForm<FormValues>()
  const {register, handleSubmit, formState} = from
  const {errors, isSubmitting} = formState


  const sendEmail: SubmitHandler<FormValues> = async (data: FormValues) => {
    console.log('form submit', data)

    try {
      if (formRef.current) {
        setIsLoading(true)
        const result = await emailjs.sendForm(
          'service_1vlz21a',
          'template_yqkka0e',
          formRef.current,
          'b_L9K2HYFXW9azKai'
        )

        if (result?.status === 200) {
          formRef.current.reset()
          setIsModalOpen(true)
          setIsLoading(false)
        }
      }
    } catch (error: any) {
      console.error(error.text)
      setIsLoading(false)
    }
  }

  return (
    isMounted && (
      <>
        <div className='contactInfo' id={id}>
          <h1 className='section_title'>Contact</h1>
          <p className='get_in_text'>
            I am thrilled that you are interested in getting in touch. Whether
            you have a project in mind, a question to ask, or simply want to say
            hello, I would love to hear from you. Feel free to reach out through
            any of the following methods.
          </p>
          <div className='contactInfo_bottom'>
            <div className='contact_left_wrapper'>
              <div className='contact_left'>
                <div className='contact_left_inner'>
                  <div className='contact_social_links'>
                    <h2>I&apos;M ALSO ON SOCIAL NETWORKS</h2>
                  </div>
                  <div className='home'>
                    <FcHome className='icon' />
                    <div>
                      <h4>Address</h4>
                      <p>Hyderabad, India</p>
                    </div>
                  </div>
                  <div className='phone'>
                    <FcPhoneAndroid className='icon' />
                    <div>
                      <h4>Let&apos;s Talk</h4>
                      <a href='tel:9701866010'>+91 9701866010</a>
                    </div>
                  </div>
                  <div className='mail'>
                    <SiGmail className='icon' />
                    <div>
                      <h4>E-Mail</h4>
                      <a href='mailto:gontimounika1998@gmail.com'>
                        gontimounika1998@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='footer_top'>
                {socialLinkIcons.map((item: any) => (
                  <Link
                    key={item.id}
                    href={item.link}
                    className='social_link_icon'
                  >
                    {item.icon}
                  </Link>
                ))}
              </div>
            </div>
            <div className='contactInfo_bottom_right'>
              <form ref={formRef} onSubmit={handleSubmit(sendEmail)}>
                <div className='input_wrapper'>
                  <label htmlFor='name'>Name</label>
                  <input
                    type='text'
                    placeholder='Enter your full name'
                    id='username'
                    {...register('username', {
                      required: {
                        value: true,
                        message: 'Full name is required',
                      },
                    })}
                  />
                  <p className='error'>{errors.username?.message}</p>
                </div>
                <div className='input_wrapper'>
                  <label htmlFor='email'>Email</label>
                  <input
                    type='email'
                    placeholder='Enter a valid email address'
                    id='email'
                    {...register('email', {
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(.[^\s@]+)?$/,
                        message: 'Invalid email format',
                      },
                      validate: {
                        notAdmin: (fieldValue) => {
                          return (
                            fieldValue !== 'admin@example.com' ||
                            'Enter a different email address'
                          )
                        },
                        notBlackListed: (filedValue) => {
                          return (
                            !filedValue.endsWith('baddomain.com') ||
                            'This domain is not supported'
                          )
                        },
                      },
                      required: {
                        value: true,
                        message: 'Email is required',
                      },
                    })}
                  />
                  <p className='error'>{errors.email?.message}</p>
                </div>
                <div className='input_wrapper'>
                  <label htmlFor='message'>Message</label>
                  <textarea
                    placeholder='Enter your message'
                    id='message'
                    {...register('message', {
                      required: {
                        value: true,
                        message: 'Message is required',
                      },
                    })}
                  />
                  <p className='error'>{errors.message?.message}</p>
                </div>
                <button type='submit' className='glow-on-hover' value='Send'>
                  {isSubmitting ? 'Sending...' : 'Submit'}
                </button>
              </form>
            </div>
          </div>
        </div>
        <SubmitModel
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      </>
    )
  )
}

export default ContactInfo

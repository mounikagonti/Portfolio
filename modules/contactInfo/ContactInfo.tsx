import useMounted from '@/hooks/useIsMounted'
import Link from 'next/link'
import React, {useRef, useState} from 'react'
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineMail,
} from 'react-icons/ai'
import {BsTelephone} from 'react-icons/bs'
import {SlLocationPin} from 'react-icons/sl'
import emailjs from '@emailjs/browser'
import {useForm} from 'react-hook-form'
import {SubmitHandler} from 'react-hook-form'
import SubmitModel from '../submitModel/SubmitModel'

const contactInfoIcons = [
  {
    id: 1,
    icon: <AiOutlineMail />,
    boldText: 'Chart to me',
    smallText: 'hmounika1997@gmail.com',
  },
  {
    id: 2,
    icon: <SlLocationPin />,
    boldText: 'Location',
    smallText: 'Nizamabad, kotagiri',
  },
  {
    id: 3,
    icon: <BsTelephone />,
    boldText: 'Phone Number',
    smallText: '9701866010',
  },
]
const socialLinkIcons = [
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
  const {errors} = formState

  // const sendEmail = (e: React.FormEvent<HTMLFormElement>, data: FormValues) => {
  //   e.preventDefault()
  //   console.log('form submit', data)

  //   emailjs
  //     .sendForm(
  //       'service_1vlz21a',
  //       'template_yqkka0e',
  //       e.currentTarget,
  //       'b_L9K2HYFXW9azKai'
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text)
  //         setNameValue('')
  //         setEmail('')
  //         setMessage('')
  //       },
  //       (error) => {
  //         console.log(error.text)
  //       }
  //     )
  // }

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
          <h1>
            Contact<span> Info </span>
          </h1>
          <div className='contactInfo_top'>
            {contactInfoIcons.map((item: any) => (
              <div className='card_one' key={item.id}>
                <div className='card_icon'>
                  <div className='icon'>{item.icon}</div>
                </div>
                <div className='card_text'>
                  <div className='bold_Text'>{item.boldText}</div>
                  <div className='small_Text'>{item.smallText}</div>
                </div>
              </div>
            ))}
          </div>
          <div className='contactInfo_bottom'>
            <div className='contactInfo_bottom_left'>
              <h2>Get In Touch</h2>
              <h4>Hi, i am Mounika Gonti</h4>
              <p className='get_in_text'>
                I am thrilled that you are interested in getting in touch.
                Whether you have a project in mind, a question to ask, or simply
                want to say hello, I would love to hear from you. Feel free to
                reach out through any of the following methods.
              </p>
              <div className='social_links'>
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
                  <label htmlFor='name'>Name:</label>
                  <input
                    type='text'
                    placeholder='Enter your full name'
                    id='username'
                    {...register('username', {
                      required: {
                        value: true,
                        message: 'full name is required',
                      },
                    })}
                  />
                  <p className='error'>{errors.username?.message}</p>
                </div>
                <div className='input_wrapper'>
                  <label htmlFor='email'>Email:</label>
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
                    })}
                  />
                  <p className='error'>{errors.email?.message}</p>
                </div>
                <div className='input_wrapper'>
                  <label htmlFor='message'>Message:</label>
                  <textarea
                    placeholder='Enter your message'
                    id='message'
                    {...register('message', {
                      required: {
                        value: true,
                        message: 'message is required',
                      },
                    })}
                  />
                  <p className='error'>{errors.message?.message}</p>
                </div>
                <button type='submit' className='btn' value='Send'>
                  {isLoading ? 'Loading...' : 'Submit'}
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

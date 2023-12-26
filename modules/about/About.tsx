import Image from 'next/image'
import React, {useState} from 'react'
import profilePic from '../../public/assets/images/mounikagonti.png'

const About = ({id}: any) => {
  const [readMoreModel, setReadMoreModel] = useState<boolean>(false)

  const handleOnReadMoreClick = () => {
    setReadMoreModel((prev) => !prev)
  }

  return (
    <>
      <div className='about' id={id}>
        <div className='about_left'>
          <div className='about_profile'>
            <Image
              alt='Profile'
              width={300}
              height={450}
              src={profilePic}
              style={{
                borderRadius: '50%',
                marginLeft: '100px',
                marginBottom: '200px',
              }}
            />
          </div>
        </div>
        <div className='about_right'>
          <h1>
            About <span>Me</span>
          </h1>
          <h3>Hello, I am Mounika Gonti Frontend developer</h3>
          <p>
            I am a passionate frontend developer dedicated to crafting seamless
            and engaging user experiences.I have the ability to transform lines
            of code into visually stunning interfaces. I am particularly
            enthusiastic about exploring the intersections of design and
            functionality, striving to strike a perfect balance between
            aesthetics and usability.
            <br />
            {readMoreModel ? (
              <span>
                <span>
                  <span className='about_text_heading'>
                    Frontend Technologies:
                  </span>
                  <br />
                  As a frontend developer, I bring a passion for creating
                  captivating user interfaces using the latest web technologies.
                  Proficient in HTML5, CSS3, and JavaScript, I specialize in
                  transforming design concepts into seamless and interactive web
                  experiences. My toolkit includes popular frontend libraries
                  and frameworks, with a strong emphasis on React.js for
                  building dynamic and responsive applications.
                </span>
                <br />
                <span>
                  <span className='about_text_heading'>
                    Responsive Web Design:
                  </span>
                  <br />
                  Crafting websites that adapt seamlessly to various devices is
                  at the core of my development philosophy. I prioritize
                  responsive web design, ensuring that users enjoy a consistent
                  and enjoyable experience across desktops, tablets, and
                  smartphones. Guided by mobile-first design principles, I
                  create interfaces that are not only visually appealing but
                  also highly accessible.{' '}
                </span>
                <br />
                <span>
                  <span className='about_text_heading'>
                    Performance Optimization:
                  </span>
                  <br />I have a keen eye for optimizing frontend performance to
                  deliver fast-loading and efficient web pages. Leveraging
                  techniques such as lazy loading, code splitting, and image
                  optimization, I aim to enhance the overall user experience. My
                  commitment to performance extends beyond user satisfaction,
                  positively impacting search engine rankings and site
                  accessibility.
                </span>
                <br />
                <span>
                  <span className='about_text_heading'>
                    Version Control and Collaboration:
                  </span>
                  <br />
                  Collaborative development is essential for successful
                  projects. Proficient in using version control systems like
                  Git, I seamlessly manage codebase changes and contribute to a
                  positive and collaborative development environment. Working
                  closely with cross-functional teams, I embrace agile
                  methodologies to ensure efficient project delivery.
                </span>
              </span>
            ) : (
              ''
            )}
          </p>
          <button onClick={handleOnReadMoreClick} className='btn'>
            {/* <svg width='180px' height='60px' viewBox='0 0 180 60' className='border'>
            <polyline points='179,1 179,59 1,59 1,1 179,1' className='bg-line' />
            <polyline points='179,1 179,59 1,59 1,1 179,1' className='hl-line' />
          </svg> */}
            {readMoreModel ? 'Read Less' : 'Read More'}
          </button>
        </div>
      </div>
    </>
  )
}

export default About

import React from 'react'

const About = ({id}: any) => {
  return (
    <>
      <div className='about' id={id}>
        <div className='about_right'>
          <h1 className='anta-regular'>
            About <span>Me</span>
          </h1>
          <h3>
            H!, I&apos;m <span className='anta-regular'>Mounika Gonti</span>
          </h3>
          <h4>Frontend Developer</h4>
          <p>
            I am a passionate frontend developer dedicated to crafting seamless
            and engaging user experiences.I have the ability to transform lines
            of code into visually stunning interfaces. I am particularly
            enthusiastic about exploring the intersections of design and
            functionality, striving to strike a perfect balance between
            aesthetics and usability. I bring a passion for creating captivating
            user interfaces using the latest web technologies. Proficient in
            HTML5, CSS3, and JavaScript, I specialize in transforming design
            concepts into seamless and interactive web experiences. My toolkit
            includes popular frontend libraries and frameworks, with a strong
            emphasis on React.js for building dynamic and responsive
            applications.
          </p>
          <a
            href='/assets/mounika_gonti_resume.pdf'
            target='_blank'
            download={true}
          >
            <button className='glow-on-hover' type='button'>
              Download Resume
            </button>
          </a>
        </div>
      </div>
    </>
  )
}

export default About

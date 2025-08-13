import React from 'react'

const HomePage = ({id}: any) => {
  return (
    <section className='homepage_container'>
      <div className='homepage' id={id}>
        <div className='homepage_left'>
          <h3>UI ALCHEMIST</h3>
          <h1 className='anta-regular'>Frontend Developer</h1>
          <p className='home_content'>
            I&apos;m your pixel magician! ✨ Crafting interfaces that captivate
            like Martian landscapes & convert like space lasers. Let&apos;s make
            your vision legendary!. Ready to see your vision come alive?
            Let&apos;s chat!
          </p>
          <a
            href='/assets/Mounika_Gonti_updated_Resume.pdf'
            target='_blank'
            download={true}
          >
            <button className='glow-on-hover' type='button'>
              Download Resume
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default HomePage

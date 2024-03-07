import Head from 'next/head'
import Header from '@/modules/header/Header'
import HomePage from '@/modules/homePage/HomePage'
import About from '@/modules/about/About'
import LatestProjects from '@/modules/latestProjects/LatestProjects'
import Skills from '@/modules/skills/Skills'
import Footer from '@/modules/footer/Footer'
import ContactInfo from '@/modules/contactInfo/ContactInfo'

export default function Home() {
  return (
    <>
      <Head>
        <title>Mounika Gonti - Frontend Developer</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='robots' content='index,follow' />
        <meta name='googlebot' content='index,follow' />
        <meta charSet='UTF-8' />
        <meta http-equiv='content-language' content='en' />
        <meta http-equiv='content-type' content='text/html; charset=utf-8' />
        <link rel='canonical' href='https://www.mounikagonti.dev/' />
        <meta name='author' content='Mounika Gonti' />
        <link rel='icon' href='/public/favicon.ico' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/public/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/public/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/public/favicon-16x16.png'
        />
        <link rel='manifest' href='/public/site.webmanifest' />
        <link
          rel='mask-icon'
          href='/public/safari-pinned-tab.svg'
          color='#682727'
        />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff' />

        <meta
          name='description'
          content='Tech enthusiast Frontend developer specializing mostly in Next js and React, Interested in Blockchain'
        />
        <meta
          name='keywords'
          content='Mounika Gonti, mounika gonti, mounika, gonti, mounika website, mounika portfolio, Mounikagonti.dev, Mounikagonti, Mounika.com, Mounika, gonti blockchain developer, web developer, react developer, youtuber, frontend developer, frontend, Kirankumar gonti'
        />

        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://www.mounikagonti.dev/' />
        <meta
          property='og:title'
          content='Mounika Gonti - Frontend Developer'
        />
        <meta
          property='og:description'
          content='Tech enthusiast Frontend developer specializing mostly in Next js and React, Interested in Blockchain'
        />
        <meta property='og:image' content='/public/mg.png' />

        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://www.mounikagonti.dev/' />
        <meta
          property='twitter:title'
          content='Mounika Gonti - Frontend Developer'
        />
        <meta
          property='twitter:description'
          content='Tech enthusiast Frontend developer specializing mostly in Next js and React, Interested in Blockchain'
        />
        <meta property='twitter:image' content='/public/mg.png' />
      </Head>
      <Header />
      <HomePage id='home' />
      <About id='about' />
      <LatestProjects id='projects' />
      <Skills id='skills' />
      <ContactInfo id='contact' />
      <Footer />
    </>
  )
}

import React from 'react'
import NavBar from './NavBar'
import HeroSection from './HeroSection'

const Header = () => {
  return (
    <>
        <div className='bg-[url(/images/hero-section/img1.webp)] bg-cover  min-h-[100vh]'>
            <NavBar />
            <HeroSection />
        </div>
    </>
  )
}

export default Header
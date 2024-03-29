import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {

  return (
    <div name='home' className='bg-[#0a192f] w-full h-screen'>
      {/* Cotainer */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Abdhulbasith</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Computer science undergrad</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I'm a Computer Science Undergraduate of Westminster University.
          interested in full-stack Development and Mobile app Development
        </p>
        <div>
          <button  className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600  '>View Work 
            <span className='group-hover:rotate-90 duration-300 '>
              <HiArrowNarrowRight className='ml-4'/>
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home

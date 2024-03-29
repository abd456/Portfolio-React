import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4 '>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
          </div>
          <div></div>          
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div>
              <p className='sm:text-right text-4xl font-bold'>Hi, I'm Abdhulbasith, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>
                I am passionate about developing websites and mobile applications. 
                currently pursuing a degree in computer science from university of westminster.
                Actively seeking opportunities in web development or app development to apply 
                skills and knowledge gained through education and personal projects.


            
                {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Fugiat, cumque ipsam assumenda architecto alias aperiam officiis. 
                Hic provident ut in, harum iure quidem, culpa fugiat debitis modi
                 necessitatibus accusantium sit? */}
              </p>
            </div>

        </div>
      </div>
    </div>
  )
}

export default About

import React from 'react'
import footballSite1 from '../assets/footballsite1.png'
import taskvault101 from '../assets/taskvault101.jpg'
import reactsite101 from '../assets/reactsite101.jpg'
import merncrud102 from '../assets/merncrud102.jpg'
import sneaker101 from '../assets/sneaker101.jpg'
import portifolio101 from '../assets/portifolio101.jpg'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300  bg-[#0a192f] pb-5'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Work</p>
          <p className='py-6'>//Check out some of my recent work</p>
        </div>

{/* container */}
        <div className=' grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

          {/* grid item */}
          <div style={{ backgroundImage: `url(${footballSite1})`,
                        backgroundPosition: 'center', }}
           className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div  '>

            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking0-wider'>
                "Football Trivia" Website
              </span>
              <div className='pt-8 text-center'>
                <a href="https://abd456.github.io/web_dev_coursework_grp21.github.io/html/home.html">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Go To Site</button>
                </a>
                <a href="https://github.com/abd456/web_dev_coursework_grp21.github.io">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>

          <div style={{ backgroundImage: `url(${taskvault101})`,backgroundPosition: 'center', }}
           className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '>

            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking0-wider'>
                TaskVault App
              </span>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>images</button>
                </a>
                <a href="https://github.com/abd456/taskvault-app">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>

           {/* grid item */}
           <div style={{ backgroundImage: `url(${reactsite101})`,backgroundPosition: 'center', }}
           className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '>

            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking0-wider'>
                React-Tailwind site
              </span>
              <div className='pt-8 text-center'>
                <a href="https://react-tailwind-test.netlify.app/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Go To Site</button>
                </a>
                <a href="https://github.com/abd456/Tailwind-React-site-1">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>

          <div style={{ backgroundImage: `url(${sneaker101})`,backgroundPosition: 'center', }}
           className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '>

            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking0-wider'>
                SneakerShop App
              </span>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>images</button>
                </a>
                <a href="https://github.com/abd456/Flutter-Snaker-shop">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>

           {/* grid item */}
           <div style={{ backgroundImage: `url(${merncrud102})`,backgroundPosition: 'center', }}
           className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '>

            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking0-wider'>
                MERN CRUD application
              </span>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>images</button>
                </a>
                <a href="https://github.com/abd456/MERN-CRUD-2">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>

          <div style={{ backgroundImage: `url(${portifolio101})`,backgroundPosition: 'center', }}
           className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '>

            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking0-wider'>
                Portifolio Website <br></br> React-Tailwind
              </span>
              <div className='pt-8 text-center'>
                <a href="https://github.com/abd456/Portfolio-React">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>images</button>
                </a>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>

        </div>

        
      </div>
    </div>
  )
}

export default Work

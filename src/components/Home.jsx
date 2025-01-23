import React from 'react'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { SiTelegram } from "react-icons/si";
import { FaSquareInstagram } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { ReactTyped } from "react-typed";
import pic from "../../public/photo.avif"
function Home() {
  return (
    <>
      <div name="Home" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
        <div className='flex  flex-col md:flex-row '>
          <div className='md:w-1/2 mt-12  md:mt-24 space-y-2 order-2 md:order-1'>
            <span className='text-xl'>Welcome In My Feed</span>
            <div className='flex space-x-3 text-2xl md:text-4xl'>
              <h1>Hello , I`m a</h1>
              <ReactTyped
                className='text-red-700 font-bold'
                strings={["Developer", "Programer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className='text-sm md:text-lg text-justify'>
            "Hi, I’m Siddhesh Ghare, a MERN stack developer with a deep passion for backend development. I thrive on building scalable server-side systems, designing efficient APIs, and optimizing databases for performance. With hands-on experience in modern web technologies, I aim to create solutions that simplify complex processes and deliver real value. Currently, I’m working on a restaurant management system to enhance operational efficiency and user satisfaction. Let’s collaborate to build something meaningful!"
            </p>
            <br />

            <div className='flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0'>
              <div className='space-y-2'>
                <h1 className='font-bold text-center'>Available on </h1>
                <ul className='flex space-x-5'>
                  <li
                    className='text-2xl cursor-pointer hover:scale-110 duration-300'>
                    <a target='blank'
                      href="https://www.facebook.com/siddhesh.gharedeshmukh">
                      <FaSquareFacebook />
                    </a>
                  </li>
                  <li
                    className='text-2xl cursor-pointer hover:scale-110 duration-300'>
                    <a target='blank'
                      href="https://www.linkedin.com/in/siddhesh-ghare-1722a0295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                      <FaLinkedin />
                    </a>
                  </li>

                  <li
                    className='text-2xl cursor-pointer hover:scale-110 duration-300'>
                    <a target='blank'
                      href="https://www.instagram.com/siddhesh_.ghare._?igsh=MTh6Z2ZnNTZ5Y2piaw==">
                      <FaSquareInstagram />
                    </a>
                  </li>
                 
                  <li className='text-2xl cursor-pointer hover:scale-125 duration-300'>{" "} <SiTelegram /></li>
                  
                 
                </ul>
              </div>
              <div className="space-y-2 ">
                <h1 className="font-bold ">Currently working on</h1>
                <div className="flex space-x-5 ml-3 text-center">
                  <SiMongodb className="text-xl md:text-3xl hover:scale-110 duration-300 rounded-full border-[2px] transition-transform transform hover:rotate-[360deg]" />
                  <FaReact className="text-xl md:text-3xl hover:scale-110 duration-300 rounded-full border-[2px] transition-transform transform hover:rotate-[360deg]" />
                  <FaNodeJs className="text-xl md:text-3xl hover:scale-110 duration-300 rounded-full border-[2px] transition-transform transform hover:rotate-[360deg]" />
                  <SiExpress className="text-xl md:text-3xl hover:scale-110 duration-300 rounded-full border-[2px] transition-transform transform hover:rotate-[360deg]" />
                </div>
              </div>


            </div>


          </div>
          <div className='md:w-1/2 md:ml-40 md:mt-20 order-1 mt-7'>
            <img className='rounded-full w-[450px] h-[450px] mix-blend-multiply ' src={pic} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home

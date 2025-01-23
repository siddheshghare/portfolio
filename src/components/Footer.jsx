import React from 'react'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { SiTelegram } from "react-icons/si";
import { FaSquareInstagram } from "react-icons/fa6";

function Footer() {
  return (
    <>
    <div>
        <hr />
        <footer className='py-12'>
            <div className='max-w-screen-2xl container mx-auto px-4 md:px-20'>
                 <div className='max-w-screen text-2xl flex items-center justify-center space-x-5'>
                    <FaSquareFacebook/>
                    <FaLinkedin/>
                    <FaSquareInstagram/>
                    <SiTelegram/>
                 </div>
                 <div className='mt-8  border-t border-gray-700 pt8 flex flex-col items-center'>
                    <p className='text-sm mt-3'>
                        &copy:2025 Your Company , All rights reserved
                    </p>
                    <p className='text-sm mt-3'>Supportive Partner Siddhesh</p>
                 </div>
            </div>

        </footer>
    </div>
      
    </>
  )
}

export default Footer

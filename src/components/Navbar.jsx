import React, { useState } from 'react'
import pic from "../../public/photo.avif"
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll"

function Navbar() {

    const [menu, setmenu] = useState(true)

    const navItems = [
        {
            id: 1,
            text: "Home"
        },
        {
            id: 2,
            text: "About"
        },
        {
            id: 3,
            text: "Portfolio"
        },
        {
            id: 4,
            text: "Experience"
        },
        {
            id: 5,
            text: "Contact"
        },
    ]
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 bg-white shadow-lg
                h-16  fixed left-0 right-0 top-0 z-50'>

                <div className='flex justify-between items-center h-16'>
                    <div className='flex space-x-2'>
                        <img className='mt-2 h-12 w-12 rounded-full' src={pic} alt="photo.avif" />
                        <div className='py-2'>
                            <h1 className='font-semibold text-xl'>Siddhesh </h1>
                            <p className='text-sm'>Web Developer</p>
                        </div>

                    </div>
                    <div>
                        <ul className='hidden md:flex space-x-6 '>
                            {
                                navItems.map((item) => {
                                    return <li className="hover:scale-105 duration-200 cursor-pointer" key={item.id}>
                                        <Link
                                            to={item.text}
                                            smooth={true}
                                            duration={500}
                                            activeClass='active'
                                        >{item.text}</Link>
                                    </li>

                                })
                            }
                        </ul>
                        <div className='md:hidden' onClick={() => setmenu(!menu)}>
                            {menu ? <AiOutlineMenu size={24} /> : <IoCloseSharp size={24} />}
                        </div>
                    </div>
                </div>

                {
                    !menu && (
                        <div className='overflow-hidden bg-white'>
                            <ul className='md:hidden flex flex-col h-screen items-center justify-center space-y-3'>
                                {
                                    navItems.map((item) => {
                                        return <li className="hover:scale-125 duration-200 cursor-pointer  text-xl font-semibold" key={item.id}> <Link
                                            onClick={() => setmenu(!menu)}
                                            to={item.text}
                                            smooth={true}
                                            duration={500}
                                            activeClass='active'
                                        >{item.text}</Link></li>

                                    })
                                }
                            </ul>
                        </div>
                    )
                }


            </div>
        </>
    )
}

export default Navbar

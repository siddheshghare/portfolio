import React from 'react'


function Portfolio() {

    const logo = [
        {
            id: 1,
            img: "express.png",
            name: "Express"
        },
        {
            id: 2,
            img: "node.png",
            name: "Node"
        },
        {
            id: 3,
            img: "reactjs.png",
            name: "ReactJs"
        },
        {
            id: 4,
            img: "mongodb.jpg",
            name: "Mongodb"
        },
        {
            id: 5,
            img: "springBoot.jpg",
            name: "Spring Boot"
        },
    ]

    return (

        <>
            <div name="Portfolio" className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'>


                <div>
                    <h1 className='text-3xl font-bold text-black'>Portfolio</h1>
                    <span className='underline font-semibold mt-2'>Featured Projects</span>

                    <div className=' grid grid-cols-1 md:grid-cols-4 gap-4 my-6 '>

                        {
                            logo.map(({ id, img, name }) => (

                                <div className='md:w-[300px] md:h[300px] border-black  border-[2px] rounded-lg shadow-lg p-1  cursor-pointer hover:scale-110 duration-300 '>
                                    <img
                                        className={`w-[120px] rounded-full  ${name === "Mongodb" ? "h-[120px]" : "h-[120px]"
                                            }`}
                                        src={img}
                                        alt={name}
                                    />
                                    <div >
                                        <span className='font-bold text-xl mb-2 px-2'>{name}</span>
                                        <p className=' font-semibold px-2'>Lorem ipsum dolor sit amet.</p>
                                    </div>
                                    <div className='flex justify-center mt-4'>
                                        <button className='bg-blue-500  hover:bg-blue-800 font-bold px-3 py-2 rounded-md'>Source Code</button>
                                    </div>
                                </div>


                            ))
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio

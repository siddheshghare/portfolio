import React from 'react'


function Experience() {

    const logo = [
        {
            id: 1,
            img: "html.png",
            name: "HTML"
        },
        {
            id: 2,
            img: "css.jpg",
            name: "CSS"
        },
       
        {
            id: 3,
            img: "express.png",
            name: "Express"
        },
        {
            id: 4,
            img: "mongodb.jpg",
            name: "Mongodb"
        },
        {
            id: 5,
            img: "reactjs.png",
            name: "ReactJs"
        },
        {
            id: 6,
            img: "node.png",
            name: "Node"
        },
        {
            id: 7,
            img: "java.png",
            name: "Java"
        },
        {
            id: 8,
            img: "springBoot.jpg",
            name: "Spring Boot"
        },
        {
            id: 9,
            img: "javascript.png",
            name: "javascript"
        }


    ]

    return (

        <>
            <div name="Experience" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-10'>


                <div>
                <h1 className='text-3xl font-bold text-black'>Experience</h1>
                    <span className='  mt-2'> Experience with following langauges/technologies over year</span>

                    <div className=' grid grid-cols-2 md:grid-cols-5 gap-6 space-y-7 mt-6 '>

                        {
                            logo.map(({ id, img, name }) => (

                                <div className='flex  flex-col items-center justify-center  md:w-[200px] md:h[250px] border-black border-[2px] rounded-full cursor-pointer hover:scale-110 duration-300 py-3'>
                                    <img
                                        className={`w-[130px] h-[130px] rounded-full  ${name === "Mongodb" ? "h-[150px]" : "h-[120px]"
                                            }`}
                                        src={img}
                                        alt={name}
                                    />
                                    <div >
                                        <span className=''>{name}</span>
                                        
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

export default Experience

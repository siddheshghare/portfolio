import React from 'react'

function About() {
    return (
        <>
            <div name="About" className='max-w-screen-2xl container mx-auto px-4 md:px-20 '>
                <h1 className='text-3xl font-bold text-black'>About</h1>
                <p className=" text-justify">
                I am Siddhesh Ghare, a passionate MERN stack developer with a strong focus on backend development. I enjoy building efficient, scalable, and secure server-side systems that power robust web applications. With a deep understanding of modern web technologies, I am committed to delivering solutions that streamline processes and enhance user experiences.
                </p>

                <h1 className='text-green-500 text-xl mt-4 '>Education & Training :</h1>
                <span className=" text-justify ">Bachelor's in Engineering (Final Year) with a focus on Computer Science and Engineering.<br />
                    Proficient in key web technologies, including Node.js, Express.js, MongoDB, and React.js.<br />
                    Hands-on training in cloud platforms like MongoDB Atlas and deployment tools.</span>


                <h1 className='text-green-500 text-xl mt-4  '>Skills & Experties :</h1>
                <span className=" text-justify">Backend Development: API design, RESTful services, and server-side logic.<br />
                    Database Management: Proficient in MongoDB, including schema design and optimization.<br />
                    Frontend Development: Skilled in React.js with a focus on integrating dynamic UIs with backend systems.<br />
                    Version Control: Git and GitHub for collaborative software development</span>


                <h1 className='text-green-500 text-xl mt-4 '>Experience :</h1>
                <span className=" text-justify">Final Year Project: Developing a comprehensive restaurant management system using the MERN stack. Features include inventory management, staff management, online orders, and payment systems.<br />
                    Internships and Personal Projects: Worked on backend-heavy applications, focusing on API performance and database optimization.<br />
                    Open Source Contributions: Actively contributing to open-source projects related to web development and backend technologies</span>


                <h1 className='text-green-500 text-xl mt-4 '>Achivements & Awards :</h1>
                <span className=" text-justify">Recognized for exceptional backend performance optimization in academic projects.<br />
                    Leading  a team project which is our Final year project .<br />
                    Successfully deployed multiple personal projects demonstrating advanced backend skills.</span>


                <h1 className='text-green-500 text-xl mt-4 '>Mission Statement:</h1>
                <span className=" text-justify">I aim to leverage my passion for backend development to create systems that are not only functional but also efficient and secure. My mission is to continuously learn, innovate, and contribute to impactful projects that simplify complex challenges for businesses and users alike.</span>



            </div>
        </>
    )
}

export default About

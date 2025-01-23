import React from 'react'

function Contact() {
    return (
        <>
            <div name="Contact" className='max-w-screen-2xl container mx-auto px-4 md:px-20'>
                <h1 className='text-3xl font-bold text-black'>
                    Contact Me
                </h1>
                <span className='font-semibold'>Please fill the form below to contact me</span>
                <div className='flex items-center justify-center py-6'>
                    <form action="https://getform.io/f/azyymwwb" method='post' className=' border-black border-[2px] bg-slate-300 w-96 px-4 py-5 rounded-xl'>
                        <h1 className=' text-xl font-semibold mb-3 '>Send your Message</h1>
                        <div className=' flex flex-col mb-4 space-y-3'>
                            <label className='block text-gray-700'>FullName</label>
                            <input className='border rounded py-2 px-3 text-gray-700'
                            name='fullname'
                                type="text" placeholder='Enter your FullName' />

                            <label className='block text-gray-700'>Email</label>
                            <input className='border rounded py-2 px-3 text-gray-700'
                            name='email'
                                type="text" placeholder='Enter your Email' />

                            <label className='block text-gray-700'>Message</label>
                            <textarea className='border rounded py-2 px-3 text-gray-700'
                            name='message'
                                type="text" placeholder='Enter your Message' />
                            <button type='submit' className='bg-black text-white rounded-md hover:bg-slate-600 py-2'> 
                                Send
                            </button>
                        </div>

                    </form>
                </div>

            </div>

        </>
    )
}

export default Contact

import React from 'react'
import {FaGithubSquare, FaLinkedinIn} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='max-w-[1240px] mx-auto py-16 px-4 lg:grid-cols-3 gap-8 text-gray-300'>
            <div>
                <h1 className='w-full text-3xl font-bold text-[#ff8a00]'>MELANIE KENT</h1>
                <p className='py-4'>Thank you for taking the time to visit my website. 
                Please feel free to visit my GitHub or LinkedIn linked below, or contact me through email.
                </p>
                <div className='flex md:w-{75%} my-6'>
                    <a href="https://www.linkedin.com/in/melanie-kent-7410131b1/">
                        <FaLinkedinIn className='mr-8' size={30}/>
                    </a>
                    <a href="https://github.com/MelanieKent">
                        <FaGithubSquare size={30}/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer
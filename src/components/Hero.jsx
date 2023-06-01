import React from 'react'
import Typed from 'react-typed'

const Hero = () => {
    return (
        <div className='text-white bg-gradient-to-b from-[#222222] to-[#425995]'>
            <div id='about' className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='text-[#ffffff] font-bold p-2'>Hello, I'm</p>
                <h1 className='text-[#ff8a00] md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Melanie Kent</h1>
                <div className='flex justify-center items-center'>
                    <p className='md:text-4xl sm:text-3xl font-bold py-4'>I am passionate about</p>
                    <Typed 
                    className='text-[#ffc077] md:text-4xl sm:text-3xl font-bold md:pl-4 pl-2'
                    strings={['software engineering.', 'digital art.', 'data science.', 'education.']} typeSpeed={50} backSpeed={50} loop/>
                </div>
                <p className='md:text-2xl text-xl font-bold text-gray-500'> 
                A UBC computer science + software engineering student.
                </p>
                <a href="mailto:melanie.s.kent@gmail.com">
                    <button className='bg-[#ff8a00] w-[140px] rounded-md font-bold my-6 mx-auto py-3 text-[#222222]'>Contact Me</button>
                </a>
            </div>     
        </div>
    )
}

export default Hero
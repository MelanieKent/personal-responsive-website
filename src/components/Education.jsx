import React from 'react'
import ubclogo from '../assets/ubclogo.png'

const Education = () => {
    return (
        <div className='w-full bg-gradient-to-b from-[#425995] to-[#779cfa] py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img id='education' className='w-[500px] mx-auto my-4 px-16 py-8' src={ubclogo} alt='/'/>
                <div classnName='flex flex-col justify-center'>
                    <p className='text-[#ff8a00] font-bold text-xl'>University of British Columbia</p>
                    <h1 className='text-[#222222] md:text-4xl sm:text-3xl text-2xl font-bold py-2'> BSc Computer Science and Software Engineering 2020 - 2025</h1>
                    <p className='text-[#222222] mt-8 font-medium'> I am entering my third year of the program. In addition to majoring in computer science, I am part of the software engineering stream
                       that allows qualified students to take additonal specified software engineering courses to gain a deeper understanding of software development. 
                       I will be an undergraduate teaching assisant for CPSC 100 in Summer 2023.
                        <br/>
                    </p>
                    <p className='text-[#222222] mt-8 font-medium'>
                        Courses taken:
                        <br/> <br/>
                        CPSC 304 (In-progress) - Introduction to Relational Databases
                        <br/>
                        CPSC 210 - Software Construction
                        <br/>
                        CSPC 221 - Basic Algorithms and Data Structures
                        <br/>
                        CPSC 213 - Indroduction to Computer Systems
                        <br/>
                        MATH 200 - Calculus III
                        <br/>
                        STAT 251 - Elementary Statistics
                        <br/>
                        STAT 200 - Elementary Statistics for Applications
                        <br/>
                        CPSC 110 - Computation, Programs and Programming
                        <br/>
                        CPSC 121 - Models of Computation
                        <br/>
                        MATH 100 - Differential Calculus with Applications
                        <br/>
                        CPSC 100 - Computational Thinking
                        <br/> <br/>
                        GPA: 4.30/4.33
                    </p>
                    <a href="https://you.ubc.ca/ubc_programs/computer-science-vancouver-bsc/" target="_blank" rel="noopener noreferrer">
                        <button className='bg-[#ff8a00] w-[140px] rounded-md font-bold my-6 mx-auto md:mx-0 py-3 text-[#222222]'>Learn More</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Education
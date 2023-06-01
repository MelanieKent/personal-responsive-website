import React from "react"
import eye from '../assets/eye.PNG'
import plane from '../assets/plane.PNG'
import selfportrait from '../assets/selfportrait.PNG'
import lion from '../assets/lion.PNG'
import model from '../assets/model.PNG'
import wolf from '../assets/wolf.PNG'
import dayplants1 from '../assets/dayplants1.PNG'
import dayplants2 from '../assets/dayplants2.PNG'
import dayplants3 from '../assets/dayplants3.PNG'
import dayplants5 from '../assets/dayplants5.PNG'
import nightplants1 from '../assets/nightplants1.PNG'
import nightplants2 from '../assets/nightplants2.PNG'


const Cards = () => {
    return (
        <div id='artwork' className='w-full py-[4rem] px-4 bg-gradient-to-b from-[#779cfa] to-[#ffffff] text-center'>
            <h1 className='text-[#222222] pb-1 sm:text-5xl md:text-4xl text-3xl font-bold'>Digital Artwork</h1>
            <h2 className='text-gray-500 pb-20 sm:text-4xl md:text-3xl text-2xl font-bold'>2018-2022</h2>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-4 gap-8'>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-110 duration-300 justify-center'>
                    <img className='w-100 mx-auto mt-[-3rem] bg-white rounded-lg' src={plane} alt='/'/>
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-110 duration-300 justify-center'>
                    <img className='w-100 mx-auto mt-[-3rem] bg-white rounded-lg' src={wolf} alt='/'/>
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-110 duration-300 justify-center'>
                    <img className='w-100 mx-auto mt-[-3rem] bg-white rounded-lg' src={eye} alt='/'/>
                </div>
                   <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-110 duration-300 justify-center'>
                    <img className='w-100 mx-auto mt-[-3rem] bg-white rounded-lg' src={dayplants3} alt='/'/>
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-110 duration-300 justify-center'>
                    <img className='w-100 mx-auto mt-[-3rem] bg-white rounded-lg' src={selfportrait} alt='/'/>
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-110 duration-300 justify-center'>
                    <img className='w-100 mx-auto mt-[-3rem] bg-white rounded-lg' src={model} alt='/'/>
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-110 duration-300 justify-center'>
                    <img className='w-100 mx-auto mt-[-3rem] bg-white rounded-lg' src={lion} alt='/'/>
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-110 duration-300 justify-center'>
                    <img className='w-100 mx-auto mt-[-3rem] bg-white rounded-lg' src={dayplants1} alt='/'/>
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-110 duration-300 justify-center'>
                    <img className='w-100 mx-auto mt-[-3rem] bg-white rounded-lg' src={dayplants2} alt='/'/>
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-110 duration-300 justify-center'>
                    <img className='w-100 mx-auto mt-[-3rem] bg-white rounded-lg' src={dayplants5} alt='/'/>
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-110 duration-300 justify-center'>
                    <img className='w-100 mx-auto mt-[-3rem] bg-white rounded-lg' src={nightplants2} alt='/'/>
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-110 duration-300 justify-center'>
                    <img className='w-100 mx-auto mt-[-3rem] bg-white rounded-lg' src={nightplants1} alt='/'/>
                </div>

            </div>
        </div>
    )
}

export default Cards
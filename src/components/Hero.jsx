import React from 'react'
import { Link, animateScroll as scroll, } from 'react-scroll'
import { Link as LinkRouter } from "react-router-dom"
import {
    CloudUploadIcon,
    DatabaseIcon,
    PaperAirplaneIcon,
    ServerIcon,
} from '@heroicons/react/solid'
import bgImg from '../assests/cyber-bg.png'
import img from '../assests/chs-logo.webp'

const Hero = () => {
    
    return (
        <div name='home' className='flex flex-col justify-between w-full h-screen dark:bg-black bg-zinc-200'>
            <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
                <div className='flex flex-col justify-center w-full px-2 py-8 md:items-start dark:text-white'>
                    <p className='text-2xl '>Maintaining safety in Workplace</p>
                    <h1 className='py-3 text-5xl font-bold md:text-7xl '>Health And Safety</h1>
                    <p className='text-2xl'>Life Science and Pharmaceuticals</p>
                    <button className='py-3 px-6 sm:w-[60%] my-4'><Link to="about" smooth={true} duration={500}><LinkRouter to ='/Stattics'>Get Statitics</LinkRouter></Link></button>
                </div>
                <div>

                    <img className='w-full' src={img} alt="/" />
                </div>
                <div className='absolute flex flex-col  py-8 md:min-w-[760px] -bottom-[15%] md:bottom-[15%]
            mx-1 md:left-1/2   transform md:-translate-x-1/2 dark:bg-slate-700 dark:text-white bg-zinc-200
            border border-slate-300 rounded-xl text-center shadow-xl'>
                    <p className='dark:text-white'>Safety Services</p>
                    <div className='flex flex-wrap justify-between px-4'>
                        <p className='flex px-4 py-2 dark:text-white text-slate-500'><CloudUploadIcon className='h-6 text-indigo-600' /> Medicines</p>
                        <p className='flex px-4 py-2 dark:text-white text-slate-500'><DatabaseIcon className='h-6 text-indigo-600' /> Dashboard Design</p>
                        <p className='flex px-4 py-2 dark:text-white text-slate-500'><ServerIcon className='h-6 text-indigo-600' /> Safety</p>
                        <p className='flex px-4 py-2 dark:text-white text-slate-500'><PaperAirplaneIcon className='h-6 text-indigo-600' /> API</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
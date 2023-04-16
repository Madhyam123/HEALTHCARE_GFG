import React, { useState } from 'react'
import { Link, animateScroll as scroll, } from 'react-scroll'
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link as LinkRouter } from "react-router-dom"


const Navbar = () => {
        const [nav, setNav] = useState(false)
        const handleClick = () => setNav(!nav)
        const  handleSignOut =()=>{
                alert("user has been signed out..")
        }
        const handleClose = () => setNav(!nav)
        return (
            <div className='w-screen h-[80px] dark:bg-black bg-zinc-200 fixed drop-shadow-lg z-5 '>
                <div className='flex items-center justify-between w-full h-full px-2'>
                    <div className='flex items-center'>
                        <h1 className='mr-4 text-3xl font-bold sm:text-4xl dark:text-white'>BRAND.</h1>
                        <ul className='hidden md:flex'>
                            <li className='transition duration-300 ease-in-out delay-150 cursor-pointer hover:-translate-y-1 hover:scale-110 hover:text-indigo-500 hover:text-lg dark:text-white'><LinkRouter to="/" smooth={true} duration={500}>Home</LinkRouter></li>
                            <li className='transition duration-300 ease-in-out delay-150 cursor-pointer hover:-translate-y-1 hover:scale-110 hover:text-indigo-500 hover:text-lg dark:text-white'><Link to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
                            <li className='transition duration-300 ease-in-out delay-150 cursor-pointer hover:-translate-y-1 hover:scale-110 hover:text-indigo-500 hover:text-lg dark:text-white'><Link to="support" smooth={true} offset={-50} duration={500}>Support</Link></li>
                            <li className='transition duration-300 ease-in-out delay-150 cursor-pointer hover:-translate-y-1 hover:scale-110 hover:text-indigo-500 hover:text-lg dark:text-white'><Link to="platforms" smooth={true} offset={-100} duration={500}>Platforms</Link></li>
                            <li className='transition duration-300 ease-in-out delay-150 cursor-pointer hover:-translate-y-1 hover:scale-110 hover:text-indigo-500 hover:text-lg dark:text-white'><Link to="pricing" smooth={true} offset={-50} duration={500}>Pricing</Link></li>

                        </ul>
                    </div>
                    <div className='hidden pr-4 md:flex'>
          <button className='mr-4 text-black bg-transparent border-none dark:text-white'>
           <LinkRouter to = '/Register'>Sign in</LinkRouter>
          </button>
          <button className='px-8 py-3 ' onClick={handleSignOut}><LinkRouter to="/">Sign Out</LinkRouter></button>
        </div>
        <div className='mr-4 md:hidden' onClick={handleClick}>
            {!nav ? <MenuIcon className='w-5 dark:text-white' /> : <XIcon className='w-5 dark:text-white' />}
          
        </div>
      </div>

      {/* <ul className={!nav ? 'hidden' : 'absolute dark:bg-black bg-zinc-200 w-full px-8'}>
      <li className='w-full border-b-2 border-zinc-300 dark:text-white'><Link onClick={handleClose} to="/" smooth={true} duration={500}>Home</Link></li>
          <li className='w-full border-b-2 border-zinc-300 dark:text-white'><Link onClick={handleClose} to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
          <li className='w-full border-b-2 border-zinc-300 dark:text-white'><Link onClick={handleClose} to="support" smooth={true} offset={-50} duration={500}>Support</Link></li>
          <li className='w-full border-b-2 border-zinc-300 dark:text-white'><Link onClick={handleClose} to="platforms" smooth={true} offset={-100} duration={500}>Platforms</Link></li>
          <li className='w-full border-b-2 border-zinc-300 dark:text-white'><Link onClick={handleClose} to="pricing" smooth={true} offset={-50} duration={500}>Pricing</Link></li>

        <div className='flex flex-col my-4'>
            <button className='px-8 py-3 mb-4 text-indigo-600 bg-transparent'>Sign In</button>
            <button  className='px-8 py-3'> <LinkRouter to ='/forms'> Sign Up</LinkRouter></button>
        </div>
      </ul> 
      */}
    </div>
                
            
        );
    };

    export default Navbar;
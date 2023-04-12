import React from 'react'

import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaTwitch,
} from 'react-icons/fa'


const Footer = () => {
  return (
    <div className='w-full px-2 mt-24 text-gray-300 bg-blue-600 dark:bg-slate-800 py-y'>
        <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
            <div>
                <h6 className='pt-2 font-bold uppercase'>Solutions</h6>
                <ul>
                    <li className='py-1'>Healthcare</li>
                    <li className='py-1'>Analytics</li>
                    <li className='py-1'>Medicines</li>
                    <li className='py-1'>Data</li>
                    <li className='py-1'>Safety</li>
                </ul>
            </div>
            <div>
                <h6 className='pt-2 font-bold uppercase'>Support</h6>
                <ul>
                    <li className='py-1'>Pricing</li>
                    <li className='py-1'>Documentation</li>
                    <li className='py-1'>Guides</li>
                    <li className='py-1'>API Status</li>
                </ul>
            </div>
            <div>
                <h6 className='pt-2 font-bold uppercase'>Company</h6>
                <ul>
                    <li className='py-1'>About</li>
                    <li className='py-1'>Blog</li>
                    <li className='py-1'>Jobs</li>
                    <li className='py-1'>Press</li>
                    <li className='py-1'>Partners</li>
                </ul>
            </div>
            <div>
                <h6 className='pt-2 font-bold uppercase'>Legal</h6>
                <ul>
                    <li className='py-1'>Claims</li>
                    <li className='py-1'>Privacy</li>
                    <li className='py-1'>Terms</li>
                    <li className='py-1'>Policies</li>
                    <li className='py-1'>Conditions</li>
                </ul>
            </div>
            <div className='col-span-2 pt-8 md:pt-2'>
                <p className='font-bold uppercase'>Subscribe to our newsletter</p>
                <p className='py-4'>The latest news, articles, and resources, sent to your inbox weekly.</p>
                <form className='flex flex-col sm:flex-row'>
                    <input className='w-full p-2 mb-4 mr-4 rounded-md' type="email" placeholder='Enter email..'/>
                    <button className='p-2 mb-4'>Subscribe</button>
                </form>
            </div>
        </div>

        <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-white'>
        <p className='py-4 text-3xl hover:text-violet-500 dark:text-white'>Made with &#10084; AI&DS GROUP 2</p>
        <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
            <FaFacebook className='hover:text-blue-300' />
            <FaInstagram className='hover:text-pink-400' />
            <FaTwitter className='hover:text-blue-400'/>
            <FaTwitch className='hover:text-cyan-400' />
            <FaGithub  className='hover:text-green-300'/>
        </div>
        </div>
    </div>
  )
}

export default Footer
import React from 'react'
import { CheckIcon } from '@heroicons/react/solid';
const Pricing = () => {
  return (
    <div name='pricing' className='w-full my-24 text-white'>
      <div className='w-full h-[800px] bg-zinc-200 dark:bg-slate-700 absolute mix-blend-overlay'></div>

      <div className='max-w-[1240px] mx-auto py-12'>

        <div className='py-8 text-center text-slate-900'>
          <h2 className='text-3xl uppercase dark:text-white'>Pricing</h2>
          <h3 className='py-8 text-5xl font-bold text-slate-900 dark:text-white'>The right price for your research.</h3>
          <p className='text-3xl dark:text-white'>
          SET SAFETY AND HEALTH AS A TOP PRIORITY
          </p>
        </div>

        <div className='grid md:grid-cols-3'>

          <div className='relative p-8 m-4 bg-white shadow-2xl dark:bg-slate-700 text-slate-900 rounded-xl'>
            <span className='px-3 py-1 text-sm text-indigo-900 uppercase bg-indigo-200 rounded-2xl'>Standard</span>
            <div>
              <p className='flex py-4 text-6xl font-bold'>450 RS<span className='flex flex-col justify-end text-xl text-slate-500'>/mo</span></p>
            </div>
            <p className='py-8 text-2xl text-slate-500'></p>
            <div className='text-2xl'>
                <p className='flex py-4 text-black dark:text-white'><CheckIcon className='w-8 mr-5 text-green-600 dark:text-white'  />SET SAFETY AND HEALTH AS TOP PRIORITY</p>
                <p className='flex py-4 text-black dark:text-white'><CheckIcon className='w-8 mr-5 text-green-600 dark:text-white'  />IMPLEMENT A REPORTING SYSTEM</p>
                <p className='flex py-4 text-black dark:text-white'><CheckIcon className='w-8 mr-5 text-green-600 dark:text-white'  />CONDUCT INSPECTION.</p>
                <p className='flex py-4 text-black dark:text-white'><CheckIcon className='w-8 mr-5 text-green-600 dark:text-white'  />BIOMEDICAL SCIENCES</p>
                <button className='w-full py-4 my-4 mt-20 bg-blue-600 dark:bg-indigo-600'>Buy Now</button>
            </div>
          </div>
          <div className='relative p-8 m-4 bg-white shadow-2xl dark:bg-slate-700 text-slate-900 rounded-xl'>
            <span className='px-3 py-1 text-sm text-indigo-900 uppercase bg-indigo-200 rounded-2xl'>Premium</span>
            <div>
              <p className='flex py-4 text-6xl font-bold'>700 RS<span className='flex flex-col justify-end text-xl text-slate-500'>/mo</span></p>
            </div>
            <p className='py-8 text-2xl text-slate-500'></p>
            <div className='text-2xl'>
                <p className='flex py-4 text-black dark:text-white'><CheckIcon className='w-8 mr-5 text-green-600 dark:text-white'  />THE PRACTICE OF MEDICINE</p>
                <p className='flex py-4 text-black dark:text-white'><CheckIcon className='w-8 mr-5 text-green-600 dark:text-white'  />ACCESS AND USE</p>
                <p className='flex py-4 text-black dark:text-white'><CheckIcon className='w-8 mr-5 text-green-600 dark:text-white'  />HEALTH EQUITY</p>
                <p className='flex py-4 text-black dark:text-white'><CheckIcon className='w-8 mr-5 text-green-600 dark:text-white'  />PHARMACEUTICALS & MEDICAL TECHNOLOGY</p>
                <p className='flex py-4 dark:text-white'><CheckIcon className='w-8 mr-5 text-green-600 dark:text-white'  />Quality Of Care</p>
                <button className='w-full py-4 my-4 bg-blue-600 dark:bg-indigo-600 '>Buy Now</button>
            </div>
            
          </div>
          <div className='relative p-8 m-4 bg-white shadow-2xl dark:bg-slate-700 text-slate-900 rounded-xl'>
            <span className='px-3 py-1 text-sm text-indigo-900 uppercase bg-indigo-200 rounded-2xl'>ROYAL</span>
            <div>
              <p className='flex py-4 text-6xl font-bold'>1000 RS<span className='flex flex-col justify-end text-xl text-slate-500'>/mo</span></p>
            </div>
            <p className='py-8 text-2xl text-slate-500'></p>
            <div className='text-2xl'>
                <p className='flex py-4 text-black uppercase dark:text-white'><CheckIcon className='w-8 mr-5 text-green-600 dark:text-white'  />Reporting Unsafe Working Conditions.</p>
                <p className='flex py-4 text-black uppercase dark:text-white'><CheckIcon className='w-8 mr-5 text-green-600 dark:text-white'  /> Tracking Hazardous Materials</p>
                <p className='flex py-4 text-black uppercase dark:text-white'><CheckIcon className='w-8 mr-5 text-green-600 dark:text-white'  />Identify priorities in your risk management procedures.</p>
                <button className='w-full py-4 my-4 mt-12 bg-blue-600 dark:bg-indigo-600'>Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing
import React from 'react'
import { PhoneIcon, ArrowSmRightIcon } from '@heroicons/react/outline';
import { ChipIcon, SupportIcon } from '@heroicons/react/solid'

import supportImg from '../assests/support.jpg'

const Support = () => {
    return (
        <div name='support' className='w-full mt-24'>
            <div className='w-full h-[700px] bg-gray-900/90 absolute'>
                <img className='object-cover w-full h-full mix-blend-overlay' src={supportImg} alt="/" />
            </div>

            <div className='max-w-[1240px] mx-auto text-white relative'>
                <div className='px-4 py-12'>
                    <h2 className='pt-8 text-3xl text-center uppercase text-slate-300'>Support</h2>
                    <h3 className='py-6 text-5xl font-bold text-center'>Finding the right team</h3>
                    <p className='py-4 text-3xl text-slate-300'>Employee health insurance is a benefit extended by an individual employers to their employees.It does not cover only the person working but also covers the rest of the family members under the policy</p>
                </div>

                <div className='relative grid grid-cols-1 px-4 pt-12 text-black lg:grid-cols-3 gap-x-8 gap-y-16 sm:pt-20 '>
                    <div className='bg-white shadow-2xl dark:bg-slate-700 rounded-xl hover:-translate-y-1 hover:scale-110 hover:bg-indigo-400'>
                        <div className='p-8'>
                            <PhoneIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                            <h3 className='my-6 text-2xl font-bold text-white'>Sales</h3>
                            <p className='text-xl text-gray-600 dark:text-white hover:text-white'>The safer the work environment, the more productive it is. Productive employees
                                are an asset to all companies. For instance, productive employees can produce
                                more output in less time, reducing operational costs.</p>
                        </div>
                        <div className='py-4 pl-8 bg-slate-100 dark:bg-slate-500'>
                            <p className='flex items-center text-red-600'>Contact Us <ArrowSmRightIcon className='w-5 ml-2' /></p>
                        </div>
                    </div>
                    <div className='bg-white shadow-2xl dark:bg-slate-700 rounded-xl hover:-translate-y-1 hover:scale-110 hover:bg-indigo-400'>
                        <div className='p-8'>
                            <SupportIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                            <h3 className='my-6 text-2xl font-bold dark:text-white'>Technical Support</h3>
                            <p className='text-xl text-gray-600 dark:text-white hover:text-white'>Workplace safety promotes the wellness of employees and employers alike. Better
                                safety equates to better health. Healthier employees do tasks more efficiently, and
                                they are happier in genera</p>
                        </div>
                        <div className='py-4 pl-8 bg-slate-100 dark:bg-slate-500 '>
                            <p className='flex items-center text-indigo-600'>Contact Us <ArrowSmRightIcon className='w-5 ml-2' /></p>
                        </div>
                    </div>
                    <div className='bg-white shadow-2xl dark:bg-slate-700 rounded-xl hover:-translate-y-1 hover:scale-110 hover:bg-indigo-400'>
                        <div className='p-8'>
                            <ChipIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                            <h3 className='my-6 text-2xl font-bold dark:text-white'>Media Inquiries</h3>
                            <p className='text-xl text-gray-600 dark:text-white hover:text-white'>There are very few accidents in a safe working environment. This results in less
                                downtime for safety investigations and reduces costs for worker’s compensation.
                                This also reduces the time needed for employees to heal from injuries.</p>
                        </div>
                        <div className='py-4 pl-8 bg-slate-100 dark:bg-slate-500'>
                            <p className='flex items-center text-green-600'>Contact Us <ArrowSmRightIcon className='w-5 ml-2' /></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Support
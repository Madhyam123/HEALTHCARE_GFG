import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full my-32'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='text-center'>
                <h2 className='text-5xl font-bold'>Trusted by developers across the world</h2>
                <p className='py-6 text-3xl text-gray-500'>Health is a Priority to an Individual.Without Good Health,we can not perform .</p>
            </div>

            <div className='grid gap-1 px-2 text-center md:grid-cols-3'>
                <div className='py-8 border shadow-xl rounded-xl' >
                    <p className='text-6xl font-bold text-indigo-600'>24/7</p>
                    <p className='mt-2 text-gray-400'>App&Website</p>
                </div>
                <div  className='py-8 border shadow-xl rounded-xl' >
                    <p className='text-6xl font-bold text-indigo-600'>24/7</p>
                    <p className='mt-2 text-gray-400'>Delivery</p>
                </div>
                <div className='py-8 border shadow-xl rounded-xl' >
                    <p className='text-6xl font-bold text-indigo-600'>15+ Insurers</p>
                    <p className='mt-2 text-gray-400'>Customized Plan</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
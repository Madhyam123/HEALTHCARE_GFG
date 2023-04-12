import React from 'react'
import { CheckIcon } from '@heroicons/react/outline';
const AllInOne = () => {
  return (
    <div name='platforms' className='w-full my-32'>
      <div className='max-w-[1240px] mx-auto px-2'>
        <h2 className='text-5xl font-bold text-center dark:text-white'>All-In-One Platform</h2>
        <p className='py-8 text-2xl text-center text-gray-500 dark:text-white'>
          A safe work environment is about more than just preventing injuries or the spread of
          disease, it is about making employee well-being a priority.
        </p>

        <div className='grid gap-4 pt-4 sm:grid-cols-2 lg:grid-cols-4'>

          <div className='flex'>
            <div>
              <CheckIcon className='mr-4 text-green-600 w-7' />
            </div>
            <div>
              <h3 className='text-lg font-bold'>Notifications</h3>
              <p className='pt-2 pb-4 text-lg dark:text-white'>
                SET SAFETY AND HEALTH AS A TOP PRIORITY
                1.Always set safety and health as the top priority. Tell your workers that making sure they
                finish the day and go home safely is the way you do business. Assure them that you will
                work with them to find and fix any hazards that could injure them or make them sick.
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <CheckIcon className='mr-4 text-green-600 w-7' />
            </div>
            <div>
              <h3 className='text-lg font-bold dark:text-white'>Notifications</h3>
              <p className='pt-2 pb-4 text-lg dark:text-white'>
                2. LEAD BY EXAMPLE
                Practice safe behaviors yourself and make safety part of your daily conversations with
                workers.
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <CheckIcon className='mr-4 text-green-600 w-7' />
            </div>
            <div>
              <h3 className='text-lg font-bold dark:text-white'>Notifications</h3>
              <p className='pt-2 pb-4 text-lg dark:text-white'>
                3. IMPLEMENT A REPORTING SYSTEM
                Develop and communicate a simple procedure for workers to report any injuries, illnesses,
                incidents (including near misses/close calls), hazards, or safety and health concerns without
                fear of retaliation. Include an option for reporting hazards or concerns anonymously.
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <CheckIcon className='mr-4 text-green-600 w-7' />
            </div>
            <div>
              <h3 className='text-lg font-bol dark:text-white'>Notifications</h3>
              <p className='pt-2 pb-4 text-lg dark:text-white'>
                4. PROVIDE TRAINING
                Train workers on how to identify and control hazards using, for example, OSHA’s Hazard
                Identification Training Tool.
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <CheckIcon className='mr-4 text-green-600 w-7' />
            </div>
            <div>
              <h3 className='text-lg font-bold dark:text-white'>Notifications</h3>
              <p className='pt-2 pb-4 text-lg dark:text-white'>
                5. CONDUCT INSPECTIONS
                Inspect the workplace with workers and ask them to identify any activity, piece of
                equipment, or material that concerns them. Use checklists, such as those included in
                OSHA’s Small Business Handbook, to help identify problems.
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <CheckIcon className='mr-4 text-green-600 w-7' />
            </div>
            <div>
              <h3 className='text-lg font-bold dark:text-white'>Notifications</h3>
              <p className='pt-2 pb-4 text-lg dark:text-white'>
                6. COLLECT HAZARD CONTROL IDEAS
                Ask workers for ideas on improvements and follow up on their suggestions. Provide them
                time during work hours, if necessary, to research solutions.
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <CheckIcon className='mr-4 text-green-600 w-7' />
            </div>
            <div>
              <h3 className='text-lg font-bold dark:text-white'>Notifications</h3>
              <p className='pt-2 pb-4 text-lg dark:text-white'>
                7. IMPLEMENT HAZARD CONTROLS
                Assign workers the task of choosing, implementing, and evaluating the solutions they come
                up with.
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <CheckIcon className='mr-4 text-green-600 w-7' />
            </div>
            <div>
              <h3 className='text-lg font-bold dark:text-white'>Notifications</h3>
              <p className='pt-2 pb-4 text-lg dark:text-white'>
                8. ADDRESS EMERGENCIES
                Identify foreseeable emergency scenarios and develop instructions on what to do in each
                case. Meet to discuss these procedures and post them in a visible location in the
                workplace.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default AllInOne
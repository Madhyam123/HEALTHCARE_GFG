import React from 'react'
import img from'../assests/2d13fe10-b1ac-404e-a4cc-df7bf68d0cfb.jpg'
import img1 from'../assests/0dc158a2-1b35-4afd-ba18-5e438e49ecf4.jpg'
import img2 from'../assests/8ce135c7-708e-449d-84d0-a19b61ba5330.jpg'
import img3  from '../assests/66e9ae6c-be88-449c-b072-116d5a0f1aa4 (1).jpg'
import img4 from '../assests/3754b50f-79f1-485c-8597-e9f4d020363a.jpg'
import img5 from '../assests/70312eca-990d-421d-80b5-12b51ceefd51.jpg'
import img6 from '../assests/c88cc8cb-5aac-41c5-b6bf-59be630b2898 (1).jpg'
import img7 from'../assests/d99b089a-922c-42a9-8672-103ef94f1c38.jpg'
import img8 from '../assests/f4d17fde-bbd5-4597-b88a-38f801c0f8c8.jpg'
import img9 from '../assests/f9f851dc-556a-4f59-a4f6-bcf81316dcdb.jpg'
import img10 from'../assests/Capture3.PNG'
import img11 from'../assests/Capture9.PNG'
import img12 from'../assests/Capture8.PNG'
import img13 from'../assests/Capture7.PNG'
const Stattics = () => {
  return (
    <section className="text-gray-600 body-font">
    {/* <div className="container flex flex-wrap px-5 py-24 mx-auto">
      <div className="flex flex-wrap w-full mb-20">
        <h1 className="mb-4 text-2xl font-medium text-gray-900 sm:text-3xl title-font lg:w-1/3 lg:mb-0 dark:text-white">OVERALL STATITICS OF HEALTH AND SAFETY</h1>
        <p className="mx-auto text-base leading-relaxed lg:pl-6 lg:w-2/3 dark:text-white">Safety statics are the number of casualties, the injuries (usually major injuries and in some cases minor injuries as well), the illness ratio and near misses in an organization. Safety statics of an organization show the amount of emphasis that is put on the health and safety and welfare of the workers.</p>
      </div>
    </div> */}
 <section className="text-gray-600 body-font">
    <section className="text-gray-600 body-font">
        <div className="container flex flex-col items-center justify-center px-5 py-24 mx-auto">
          <img className="object-cover object-center w-5/6 mb-10 rounded lg:w-2/6 md:w-3/6" alt="hero" src={img10} />
          <div className="w-full text-center lg:w-2/3">
            <h1 className="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl dark:text-white">OVERALL STATITICS OF HEALTH AND SAFETY</h1>
            <p className="mb-8 leading-relaxed dark:text-white">Safety statics are the records that contain the casualties, injuries, near misses, illness ratios, etc. about the organization. It shows the overall standards of safety practices that are being carried out in an organization</p>
            <div className="flex justify-center">
              <button className="inline-flex px-6 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600 hover:text-white">FOLLOW</button>
              <button className="inline-flex px-6 py-2 ml-4 text-lg text-gray-700 bg-gray-100 border-0 rounded focus:outline-none hover:bg-gray-200">MORE</button>
            </div>
          </div>
        </div>
      </section>
  </section>
   
   </section>
  )
}

export default Stattics
import React from 'react'

const Company = () => {
  return (
    <div>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <div to="form" className="flex">
      <div className="mt-48 ml-64 ">
        <h1 className="text-6xl font-bold text-purple-500">LOG IN FORM</h1>
        <p className="mt-2 text-3xl font-normal text-slate-900 dark:text-white">By continuing, you agree to Our Conditions<br/> 
        of Use and Privacy Notice.</p>
      </div>
      <div className="flex flex-col ml-24 rounded-lg mt-52 dark:bg-slate-700 bg-zinc-50 drop-shadow-2xl">
        <form action="http://localhost:3001/">
          <input className="px-20 py-4 mt-4 ml-4 mr-4 rounded-lg focus:outline-none ring-2 ring-bg-zinc-500 focus:ring ring-offset-0 focus:ring-blue-400" type="text" placeholder="Email address or Phone number " />
          <input className="flex flex-col px-20 py-4 mt-4 ml-4 mr-4 rounded-lg focus:outline-none ring-2 ring-bg-zinc-500 focus:ring ring-offset-0 focus:ring-blue-400" type="password" placeholder="Password" />
          <button className="py-4 mt-4 ml-4 mr-4 font-bold text-white bg-indigo-600 rounded-lg hover:text-white px-36 hover:bg-indigo-700">Log In</button>
          <span className="flex flex-col mt-2 text-blue-500 px-28 hover:underline ">Forgot Password?</span>
          <hr />
          <button className="relative px-1 py-2 mt-6 mb-4 ml-24 mr-4 font-bold transition-all duration-75 ease-in rounded-md bg-gradient-to-r from-indigo-400 via-Fuchsia-400 via-pink-300 to-purple-400 focus:ring-4 focus:ring-blue-300">Create New Account</button>
          <div className="flex ">
            <p className="flex flex-row pl-4 pr-4 mt-5 mb-12 font-bold text-gray-900 bg-gray-100 rounded-lg drop-shadow-sm hover:underline">Create a Page <span className="font-light text-gray-700">&nbsp;for a celebrity, brand or business.</span></p>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Company
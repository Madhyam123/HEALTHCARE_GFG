import React,{useState, useEffect} from 'react';

const Register = () => {
    const [user, setUser] = useState({
      email:"",
      password:""
    });

    let name,value;
    const getUserData = (event)=>{
      name = event.target.name;
      value = event.target.value;

      setUser( { ...user,[name]:value});
    };

    const postUserData = async(e)=>{
      e.preventDefault();

      const {email,password} = user;
      const res= await fetch("https://gfg-8aab-default-rtdb.firebaseio.com/healthcare.json",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify({
          email,
          password
          
        }),
      });
    };


  return (
    <div>
    
    <div to="form" className="flex">
      <div className="mt-48 ml-64 ">
        <h1 className="text-6xl font-bold text-purple-500">LOG IN FORM</h1>
        <p className="mt-2 text-3xl font-normal text-slate-900 dark:text-white">By continuing, you agree to Our Conditions<br/> of Use and Privacy Notice.</p>
      </div>
      <div className="flex flex-col ml-24 rounded-lg mt-52 dark:bg-slate-700 bg-zixnc-50 drop-shadow-2xl">
        <form method="POST" action="http://localhost:3000/">
          <input onChange = {getUserData} name="email" value={user.name} className="px-20 py-4 mt-4 ml-4 mr-4 rounded-lg focus:outline-none ring-2 ring-bg-zinc-500 focus:ring ring-offset-0 focus:ring-blue-400" type="text" placeholder="Email address" required />
          <input onChange = {getUserData} name ="password" value ={user.password} className="flex flex-col px-20 py-4 mt-4 ml-4 mr-4 rounded-lg focus:outline-none ring-2 ring-bg-zinc-500 focus:ring ring-offset-0 focus:ring-blue-400" type="password" placeholder="Password" required/>
          <button className="py-4 mt-4 ml-4 mr-4 font-bold text-white bg-indigo-600 rounded-lg hover:text-white px-36 hover:bg-indigo-700">Log In</button>
          <span className="flex flex-col mt-2 text-blue-500 px-28 hover:underline ">Forgot Password?</span>
          <hr />
          <button onClick = {postUserData} className="relative px-1 py-2 mt-6 mb-4 ml-24 mr-4 font-bold transition-all duration-75 ease-in rounded-md bg-gradient-to-r from-indigo-400 via-Fuchsia-400 via-pink-300 to-purple-400 focus:ring-4 focus:ring-blue-300">Create New Account</button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Register;
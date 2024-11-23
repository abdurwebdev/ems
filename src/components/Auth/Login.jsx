import React, { useContext, useState } from 'react'


const Login = ({handleLogin}) => {
  
  
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const submitHandler = (e) =>{
        e.preventDefault();
        setEmail('')
        setPassword('')
        console.log('username is',email)
        console.log('password is',password)
        handleLogin(email,password)
        
  }
  
  
  return (
    <div className='w-screen overflow-hidden h-screen bg-[#111] flex items-center justify-center'>
      <div className='w-96  border-2 p-10 border-emerald-400 rounded-xl'>
        <form onSubmit={(e)=>
          submitHandler(e)
        } className='flex flex-col'>
          <input
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
          required className='text-white placeholder:text-gray-200 px-3 py-2 rounded-full border-2 border-emerald-400 outline-none  bg-transparent' type="text" placeholder='Enter your email' />
          <input
          value={password}
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
          required className='text-white placeholder:text-gray-200 px-3 py-2 rounded-full border-2 border-emerald-400 mt-5 outline-none  bg-transparent' type="password" placeholder='Enter password'/>
          <button className='w-full bg-emerald-400 rounded-full px-5 py-2 mt-10'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
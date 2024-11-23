import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

const AllTask = () => {
  const [userData,setUserData]=useContext(AuthContext)
  
  
  return (
    <div id='all' className='px-1 mt-20 bg-[#1C1C1C] overflow-auto h-48  '>
      <div className='flex  sticky top-0 w-full px-5 mb-5 rounded-xl bg-red-400 py-2'>
        <h1 className='w-1/5 text-lg font-medium'>Employee Name</h1>
        <h1 className='w-1/5 text-lg font-medium'>New Task</h1>
        <h1 className='w-1/5 text-lg font-medium'>Active Task</h1>
        <h1 className='w-1/5 text-lg font-medium'>Completed</h1>
        <h1 className='w-1/5 text-lg font-medium'>Failed</h1>
      </div>
     {userData.map((item,index)=>{
      return  <div key={index} className='flex  text-black mb-2 w-full h-10 px-5 rounded-xl border-2 border-green-400 items-center justify-between'>
      <h1 className='text-white w-1/5 text-lg'>{item.firstName}</h1>
      <h1 className='text-blue-400 w-1/5 text-lg'>{item.taskCounts.newTask}</h1>
      <h1 className='text-yellow-300 w-1/5 text-lg'>{item.taskCounts.active}</h1>
      <h1 className='text-white w-1/5 text-lg'>{item.taskCounts.completed}</h1>
      <h1 className='text-red-500 w-1/5 text-lg'>{item.taskCounts.failed}</h1>
    </div>
     })}
    </div>
  )
}

export default AllTask
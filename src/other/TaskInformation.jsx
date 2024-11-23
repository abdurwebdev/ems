import React from 'react'

const TaskInformation = ({data}) => {
  return (
    <div className='w-full mt-10 flex items-center justify-between'>
      <div className='w-72 rounded-xl bg-green-300 p-10'>
        <h2 className='font-extrabold text-black text-xl'>{data.taskCounts.newTask}</h2>
        <h1 className='text-xl font-normal text-black'>New Task</h1>
      </div>
      <div className='w-72 rounded-xl bg-yellow-300 p-10'>
        <h2 className='font-extrabold text-black text-xl'>{data.taskCounts.active}</h2>
        <h1 className='text-xl font-normal text-black'>Active Task</h1>
      </div>
      <div className='w-72 rounded-xl bg-purple-300 p-10'>
        <h2 className='font-extrabold text-black text-xl'>{data.taskCounts.completed}</h2>
        <h1 className='text-xl font-normal text-black'>Completed Task</h1>
      </div>
      <div className='w-72  rounded-xl bg-blue-300 p-10'>
        <h2 className='font-extrabold text-black text-xl'>{data.taskCounts.failed}</h2>
        <h1 className='text-xl font-normal text-black'>Failed Task</h1>
      </div>
      </div>
  )
}

export default TaskInformation
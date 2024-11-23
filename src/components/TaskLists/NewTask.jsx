import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className='w-[40%] flex-shrink-0 p-5 h-60 bg-yellow-400 rounded-xl'>
        <div className='flex items-center justify-between'>
          <h1 className='px-3 py-2 rounded-xl bg-red-600'>{data.taskDesign}</h1>
          <h1>{data.taskDate}</h1>
        </div>
        <h1  className='mt-5'>{data.taskTitle}</h1>
        <p  className='mt-2'>{data.taskDescription}</p>
        <div className='flex items-center justify-between mt-5'>
          <button className='bg-blue-400 px-2 py-1 rounded-xl'>Completed</button>
          <button className='bg-green-400 px-2 py-1 rounded-xl'>Accepted</button>
        </div>
      </div>
  )
}

export default NewTask
import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className='w-[40%] flex-shrink-0 p-5 h-60 bg-green-400 rounded-xl'>
        <div className='flex items-center justify-between'>
          <h1 className='px-3 py-2 rounded-xl bg-red-600'>{data.taskDesign}</h1>
          <h1>{data.taskDate}</h1>
        </div>
        <h1  className='mt-5'>{data.taskTitle}</h1>
        <p  className='mt-2'>{data.taskDescription}</p>
        <div className='flex items-start justify-start'>
          <button className='bg-red-700 mt-5 px-2 py-1 rounded-xl'>Failed</button>
        </div>
      </div>
  )
}

export default FailedTask
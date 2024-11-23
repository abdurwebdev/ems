import React from 'react'

const AcceptTask = ({data}) => {
  return (
    <div className='w-[40%] flex-shrink-0 p-5 h-60 bg-red-400 rounded-xl'>
        <div className='flex items-center justify-between'>
          <h1 className='px-3 py-2 rounded-xl bg-red-600'>{data.taskDesign}</h1>
          <h1>{data.taskDate}</h1>
        </div>
        <h1  className='mt-5'>{data.taskTitle}</h1>
        <p  className='mt-2'>{data.taskDescription}</p>
        <div className='flex items-start justify-start'>
          <button className='bg-green-400 mt-5 px-2 py-1 rounded-xl'>Accept Task</button>
        </div>
      </div>
  )
}

export default AcceptTask
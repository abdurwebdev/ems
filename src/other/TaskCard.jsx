import React from 'react'
import NewTask from '../components/TaskLists/NewTask'
import AcceptTask from '../components/TaskLists/AcceptTask'
import CompleteTask from '../components/TaskLists/CompleteTask'
import FailedTask from '../components/TaskLists/FailedTask'

const TaskCard = ({data}) => {
  console.log(data);
  
  return (
    <div id='task' className='w-full mt-10 gap-5 overflow-x-auto flex items-start text-black justify-start'>
      {data.tasks.map((item,index)=>{
        console.log(item);
        
        if(item.active)
        {
          return <AcceptTask key={index} data={item}/>
        }
        if(item.newTask)
        {
          return <NewTask key={index} data={item} />
        }
        if(item.completed)
        {
          return <CompleteTask key={index} data={item}/>
        }
        if(item.failed)
        {
          return <FailedTask key={index} data={item}/>
        }
      })}
    </div>
  )
}

export default TaskCard
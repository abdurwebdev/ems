import React from 'react'
import Header from '../../other/Header'
import TaskInformation from '../../other/TaskInformation'
import TaskCard from '../../other/TaskCard'

const EmployeeDashboard = (props) => {


  
  return (
    <>
    <div className='w-full font-[gilroy] h-screen text-white p-10 bg-[#1C1C1C]'>
    <Header changeUser={props.changeUser} data={props.data}/>
    <TaskInformation data={props.data}/>
    <TaskCard data={props.data}/>
    </div>
    </>
  )
}

export default EmployeeDashboard
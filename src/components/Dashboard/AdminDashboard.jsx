import React, { useState } from 'react'
import Header from '../../other/Header'
import CreateTask from '../../other/CreateTask'
import AllTask from '../../other/AllTask'

const AdminDashboard = (props) => {
  
  return (
    <>
    <div id='dash' className='w-screen min-h-screen overflow-hidden text-white p-10 bg-[#1C1C1C]'>
      <Header changeUser={props.changeUser}/>
      <CreateTask/>
      <AllTask/>
    </div>
    
    </>
  )
}

export default AdminDashboard
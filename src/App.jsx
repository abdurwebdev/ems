import React, { useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { useContext } from 'react'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  const [user, setUser] = useState(null)
  const [loggedInData, setLoggedInData] = useState(null)
  const [userData,setUserData]=useContext(AuthContext);
  // useEffect(() => {
  //   if(authData)
  //   {
  //     const loggedInUser=localStorage.getItem("loggedInUser")
  //     if(loggedInUser)
  //     {
  //       setUser(loggedInUser.role)
  //     }
  //   }
  
    
  // }, [authData])
  
  
  const handleLogin = (email,password) =>{
    if(email=='admin@me.com' && password==123)
    {
      setUser('admin')
      localStorage.setItem("loggedInUser",JSON.stringify({role:"admin"}))
    }
    else if(userData)
    {
      const employee=userData.find((e)=>e.email==email && e.password==password)
      if(employee)
      {
        setUser('employee')
        localStorage.setItem("loggedInUser",JSON.stringify({role:"employee",data:employee}))
        setLoggedInData(employee)
      }
      
    }
  }
  useEffect(() => {
    const loggedInUser=localStorage.getItem('loggedInUser')
    if(loggedInUser)
    {
      const userData=JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInData(userData.data)
      
    }
  
    
  }, [])
  
  // useEffect(() => {
  //   // setLocalStorage()
  //   getLocalStorage()
  // }, [])
  
  return (
    <>
    {!user ?<Login handleLogin={handleLogin}/>:''}
    {user=='admin'?<AdminDashboard changeUser={setUser}/>:(user=='employee'?<EmployeeDashboard changeUser={setUser} data={loggedInData}/>:null)}
    </>
  )
}

export default App
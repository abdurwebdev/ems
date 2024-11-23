import React from 'react'

const Header = (props) => {
  const logOutUser = () =>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
  }
  return (
    <div>
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='text-2xl font-normal'>Hello <br /> <span className='text-2xl font-extrabold'>Username✋</span></h1>
        </div>
        <div>
          <button onClick={logOutUser} className='rounded-xl bg-red-600 px-3 py-2'>Log Out</button>
        </div>
      </div>
    </div>
  )
}

export default Header
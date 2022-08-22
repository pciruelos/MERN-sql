import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='w-full h-[50px] bg-blue-400 flex items-center'>
<div className='flex justify-around mx-auto'>
    <h1 className='px-4 flex items-center'>React + sql</h1>
    <ul className='px-4 flex items-center'>
        <li className='p-2'><Link to="/">Home</Link></li>
        <li className='p-2'><Link to="/new">New</Link></li>
    </ul>
</div>
    </nav>
  )
}

export default Nav
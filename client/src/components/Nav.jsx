import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
<div>
    <h1>React + sql</h1>
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/new">New</Link></li>
    </ul>
</div>
    </nav>
  )
}

export default Nav
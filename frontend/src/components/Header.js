import React from 'react'
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'

function Header() {

    const navigate = useNavigate()

  return (
 <header className='header'>
      <div className='logo'>
        <Link to='/'>Support Desk</Link>
      </div>
      <ul>
        {/* {user ? ( */}
          <li>
            <button className='btn'>
              <FaSignOutAlt /> Logout
            </button>
          </li>
        {/* ) : ( */}
          <>
            <li>
              <Link to='/login'>
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li>
              <Link to='/register'>
                <FaUser /> Register
              </Link>
            </li>
          </>
        {/* )} */}
      </ul>
    </header>
  )
}

export default Header
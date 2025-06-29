import React, { useState } from 'react';
import { FaSearch, FaShoppingBag, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const user = {
  _id: "Vikram",
  role: "admin"
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const logoutHandler = () => {
    setIsOpen(false);
  }

  return (
    <nav className='header'>
      <Link to={'/'} onClick={() => setIsOpen(false)}>HOME</Link>
      <Link to={'/search'} onClick={() => setIsOpen(false)}>{<FaSearch />}</Link>
      <Link to={'/cart'} onClick={() => setIsOpen(false)}>{<FaShoppingBag />}</Link>

      {
        user._id ? 
        <>
          <button
            onClick={() => setIsOpen((prev) => !prev)}
          >{<FaUser />}</button>
          <dialog open={isOpen}>
            <div>
              {
                user?.role === "admin" && 
                <Link 
                  onClick={() => setIsOpen(false)}
                  to={'/admin/dashboard'}
                  >
                  Admin
                </Link>
              }

              <Link to={'/orders'} onClick={() => setIsOpen(false)}>Orders</Link>

              <button onClick={logoutHandler}>{<FaSignOutAlt />}</button>
            </div>
          </dialog>
        </>

        :
        <Link to={'/login'}>{<FaSignInAlt />} </Link>
      }
    </nav>
  )
}

export default Header
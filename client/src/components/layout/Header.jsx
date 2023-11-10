import { RiDashboardFill, RiMenu5Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './header.css';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/actions/user'

const Header = ({ isAuthenticated = false, user }) => {
  const [isActive, setIsActive] = useState(true);
  const dispatch = useDispatch()

  const handleClick = () => {
    setIsActive(!isActive);
  };
  const logoutHandler = () => {

    handleClick();
    dispatch(logout())

  };



  return (
    <>
      <div className="headerBtn">
        <button onClick={handleClick}>
          <RiMenu5Fill />
        </button>
      </div>
      <div className={`headerContainer ${isActive ? 'active' : ''}`}>
        <div className="headerContainer2">


          <div className="links">
            <Link onClick={handleClick} to="/">Home</Link>
            <Link onClick={handleClick} to="/courses">All Courses</Link>
            <Link onClick={handleClick} to="/request">Request for a Course</Link>
            <Link onClick={handleClick} to="/about">About</Link>
            <Link onClick={handleClick} to="/contact">Contact</Link>
          </div>

          {
            // check if the user is login or not {isAuthenticated?():()}
            isAuthenticated ? (<>
              <div className="registerBtn">
                <Link onClick={handleClick} to="/profile">Profile</Link>
                <span>OR</span>
                <button onClick={logoutHandler} className='logout'>LogOut</button>
              </div>
            </>) : (<>
              <div className="registerBtn">
                <Link onClick={handleClick} to="/login">Login</Link>
                <span>OR</span>
                <Link onClick={handleClick} to="/signup">Sign Up</Link>
              </div>
            </>)
          }




          {
            // condition for the login user if the user is not login and admin the dashboard will not be shown
            user && user.role === "admin" && <Link className='adminBtn' onClick={handleClick} to="/admin/dashboard">
              <button>
                <RiDashboardFill />
                Dashboard
              </button>
            </Link>
          }



        </div>
      </div>
    </>
  );
};

export default Header;

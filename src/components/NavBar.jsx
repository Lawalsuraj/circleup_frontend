import React from "react";
import { FaBars, FaUsers } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/AuthStore";

const NavBar = () => {

  const { user, logout, isLoggedIn } = useAuthStore();
  const navigate = useNavigate()

  const logoutHandler = async ()=>{
    await logout();

   navigate('/auth/login');
  }

  return (
    <div className="navbar bg-base-100 shadow-sm px-4 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <FaBars className="h-5 w-5" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <Link to="/" className="btn btn-ghost normal-case text-xl flex items-center gap-2 max-sm:px-0">
          <FaUsers className="text-primary" /> CircleUp
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      
      <div className="navbar-end">
        {  isLoggedIn
     ? (
          <>
            <Link to="/profile" className="btn btn-ghost">
              Profile
            </Link>
            <button onClick={logoutHandler} className="btn btn-error ml-2">
              Logout
            </button>
          </>
          
        ) : (
          

          <>
            <Link to="/auth/login" className="btn btn-primary  border-none text-white mr-2">
              Login
            </Link>
            <Link to="/auth/register" className="btn btn-outline btn-primary">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;

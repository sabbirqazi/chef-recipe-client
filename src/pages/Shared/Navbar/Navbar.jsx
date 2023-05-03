/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
 console.log(user)
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };
  return (
    <>
      <div className="navbar bg-gray-50">
        <div className="navbar-start lg:ml-20">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/" aria-label="Home" title="Home">
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/blog" aria-label="Blog" title="Blog">
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">ChefTable</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/" aria-label="Home" title="Home">
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/blog" aria-label="Blog" title="Blog">
                Blog
              </NavLink>
            </li>
            <li></li>
          </ul>
        </div>
        <div className="navbar-end  lg:mr-20">
          {user && (
            <div className="w-10 rounded-full mr-4">
              <img src={user.photoURL} />
            </div>
          )}
          {user ? (
            <Link onClick={handleLogOut} className="btn btn-primary">
              Logout
            </Link>
          ) : (
            <Link to={"/login"} className="btn btn-primary">
              Login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;

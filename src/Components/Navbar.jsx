import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { IoMdHome } from "react-icons/io";
import { BiSolidCoupon } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FcAbout } from "react-icons/fc";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const links = (
    <>
      <NavLink
        className={({ isActive }) =>
          `text-xl flex items-center gap-2 mr-5 ${
            isActive ? "btn btn-accent text-white" : ""
          }`
        }
        to="/"
      >
        {" "}
        <IoMdHome />
        Home
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          `text-xl flex items-center gap-2 mr-5 ${
            isActive ? "btn btn-accent text-white" : ""
          }`
        }
        to="/brands"
      >
        <BiSolidCoupon />
        Brands
      </NavLink>

      {user && user?.email ? (
        <NavLink
          className={({ isActive }) =>
            `text-xl flex items-center gap-2 mr-5 ${
              isActive ? "btn btn-accent text-white" : ""
            }`
          }
          to="/my-profile"
        >
          <CgProfile />
          My Profile
        </NavLink>
      ) : (
        ""
      )}

      <NavLink
        className={({ isActive }) =>
          `text-xl flex items-center gap-2 ${
            isActive ? "btn btn-accent text-white" : ""
          }`
        }
        to="/about"
      >
        <FcAbout />
        About
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="w-[80px] ">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex gap-5">{links}</ul>
      </div>
      <div className="navbar-end flex gap-5">
        {user && user?.email ? (
          <div className="flex items-center gap-5">
            <div className="flex flex-col justify-center items-center">
              <img
                className="w-16 rounded-full border-2 p-1"
                src={user?.photoURL}
                alt=""
              />
              <h1 className="text-xs">{user?.email}</h1>
            </div>
            <div>
              <Link onClick={logOut} className="btn text-xl">
                Logout
              </Link>
            </div>
          </div>
        ) : (
          <>
            <NavLink
              className={({ isActive }) =>
                `text-xl btn  ${isActive ? "btn btn-primary text-white" : ""}`
              }
              to="/register"
            >
              Register
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `text-xl btn ${isActive ? "btn btn-primary text-white" : ""}`
              }
              to="/login"
            >
              Login
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;

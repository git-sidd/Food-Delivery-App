import React,{useState} from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import handleLogout from "../Screens/Logout";

export default function Navbar() {
  const  [isMenuOpen, setisMenuOpen] = useState(false)
  const toggleMenu=()=>{
    setisMenuOpen(!isMenuOpen)
  }
  return (
    <div>
      <nav className="bg-red-900 bg-opacity-80">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                onClick={toggleMenu}
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                {/* <!--
            Icon when menu is closed.

            Menu open: "hidden", Menu closed: "block"
          --> */}
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                {/* <!--
            Icon when menu is open.

            Menu open: "block", Menu closed: "hidden"
          --> */}
                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between mt-2">
              <div className="flex flex-shrink-0 gap-3 items-center justify-center">
                <img
                  className="md:h-[50px] h-[60px] w-[60px] md:w-[50px] object-contain"
                  height="60px"
                  width="60px"
                  src={logo}
                  alt="Your Company"
                />
                 <Link
                    to="/"
                    className="rounded-md px-3 py-2 text-sm font-medium hidden sm:block md:block lg:block text-gray-300 bg-gray-900 hover:bg-gray-700 hover:text-white"
                  >
                    Home
                  </Link>
                  {
                    !localStorage.getItem("authToken")?
                    <Link
                    to="/myorders"
                    className="rounded-md px-3 py-2 text-sm font-medium hidden sm:block md:block lg:block text-gray-300 bg-gray-900 hover:bg-gray-700 hover:text-white"
                  >
                    My Orders
                  </Link>
                  :"" 
                  }
              </div>
              <div className="hidden sm:ml-6 sm:block  justify-around">
                <div className="flex space-x-4 mx-auto my-auto ">
                  {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                 
                  <div className="flex items-center justify-center gap-3 mt-1">
                  {(!localStorage.getItem('authToken'))?
                    (
                      <div className="flex items-center justify-center gap-3 mt-1"> 
                      <Link
                      to="/login"
                      className="rounded-md px-3 py-2 text-sm font-medium bg-gray-900 text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      Login
                    </Link>
                    <Link
                      to="/signup"
                      className="rounded-md px-3 py-2 text-sm font-medium bg-gray-900 text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      SignUP
                    </Link>
                    </div>
                    ):(<div className="flex items-center justify-center gap-3 mt-1">
                      <Link
                      to="/login"
                      onClick={handleLogout}
                      className="rounded-md px-3 py-2 text-sm font-medium bg-gray-900 text-red-700 hover:bg-red-700 hover:text-white"
                    >
                      Logout
                    </Link>
                    </div>)}
                    {

                    }
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <button type="button" className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
          <span className="absolute -inset-1.5"></span>
          <span className="sr-only">View notifications</span>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
          </svg>
        </button>

        <!-- Profile dropdown -->
        <div className="relative ml-3">
          <div>
            <button type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
              <span className="absolute -inset-1.5"></span>
              <span className="sr-only">Open user menu</span>
              <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
            </button>
          </div>

          <!--
            Dropdown menu, show/hide based on menu state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          -->
        
        </div>
      </div> */}
          </div>
        </div>

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        <div className="sm:hidden" id="mobile-menu" >
          <div className={`space-y-1 px-2 pb-3 pt-2 ${isMenuOpen ? 'translate-x-0' : 'translate-x-48'}} `} >
            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
            <Link
              to="/"
              className="block rounded-md px-3 py-2 text-base font-medium  text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Home
            </Link>
            {!localStorage.getItem("authToken")?(<Link
              to="/"
              className="block rounded-md px-3 py-2 text-base font-medium  text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              My Order
            </Link>):""}
            {( localStorage.getItem("authToken"))?(<div > 
              <Link
              to="/login"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              SignUp
            </Link>
            </div>)
            :(<Link
              to="/login"
              onClick={handleLogout}
              className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700 hover:text-red-700"
            >
              Logout
            </Link>)}
          </div>
        </div>
      </nav>
    </div>
  );
}

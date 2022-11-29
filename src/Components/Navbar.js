import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const [click, setClick] = useState(false);
  const closeMobileMenu = () => setClick(false);
  const handleClick = () => setClick(!click);
  return (
    <div>
      <nav className="bg-[#322212] dark:bg-gray-800 shadow-inner-xl z-50">
        <div className="max-w-7xl px-8">
          <div className="flex items-center h-16">
            <div className="w-full justify-end flex items-center">
              <a className="flex-shrink-0" href="/">
                <img
                  src={logo}
                  classNameName="img-fluid animated"
                  alt="PizzaRoma"
                />
              </a>
              <div className="hidden md:flex">
                <div className="ml-10 flex items-baseline space-x-4 lg:inline-flex lg:flex-grow lg:w-auto mx-auto">
                  <a
                    className="text-white hover:text-gray-800 hover:text-[#f0cfa5] dark:hover:text-[#f0cfa5] px-3 py-2 rounded-md text-sm font-medium lg:inline-flex lg:w-auto"
                    href="/#"
                  >
                    Home
                  </a>
                  <a
                    className="text-white dark:text-white  hover:text-[#f0cfa5] dark:hover:text-[#f0cfa5] px-3 py-2 rounded-md text-sm font-medium"
                    href="/#"
                  >
                    Menu
                  </a>
                  <a
                    className="text-white  hover:text-[#f0cfa5] dark:hover:text-[#f0cfa5] px-3 py-2 rounded-md text-sm font-medium"
                    href="/#"
                  >
                    Blog
                  </a>
                  <a
                    className="text-white  hover:text-[#f0cfa5] dark:hover:text-[#f0cfa5] px-3 py-2 rounded-md text-sm font-medium"
                    href="/#"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
            <div className="block">
              <div className="ml-4 flex items-center md:ml-6"></div>
            </div>
            <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose color="white" size={20}/> : <AiOutlineMenu color="white" size={20} />}
            </div>
          </div>
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full z-50 border-r md:hidden border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div className='w-full bg-[#322212] p-3 rounded'>
            <a className="flex-shrink-0" href="/">
                <img
                  src={logo}
                  classNameName="img-fluid animated"
                  alt="PizzaRoma"
                />
              </a>
            </div>
          
            <li className='p-4 text-white hover:text-[#f0cfa5] dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium'>Home</li>
          <li className='p-4 text-white hover:text-[#f0cfa5] dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
          <Link
                      to="/pizzas"
                      className="nav-link scrollto active"
                      onClick={closeMobileMenu}
                    >
                      Pizzas
                    </Link>
          </li>
          <li className='p-4 text-white hover:text-[#f0cfa5] dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
          <Link
                      to="/pastas"
                      className="nav-link scrollto active"
                      onClick={closeMobileMenu}
                    >
                      Pasta
                    </Link>
          </li>
          <li className='p-4 text-white hover:text-[#f0cfa5] dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
          <Link
                      to="/salads"
                      className="nav-link scrollto active"
                      onClick={closeMobileMenu}
                    >
                      Salads
                    </Link>
          </li>
          <li className='p-4 text-white hover:text-[#f0cfa5] dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
          <Link
                      to="/desserts"
                      className="nav-link scrollto active"
                      onClick={closeMobileMenu}
                    >
                      Desserts
                    </Link>
          </li>
          <li className='p-4 text-white hover:text-[#f0cfa5] dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
          <Link
                      to="/order"
                      className="nav-link scrollto active"
                      onClick={closeMobileMenu}
                    >
                      Order now
                    </Link>
          </li>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

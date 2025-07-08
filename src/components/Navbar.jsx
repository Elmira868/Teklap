import React from 'react'
import {navItems}from '../data/index'
const Navbar = ({activePage , handleNavClick , isNavbarOpen , toggleNavbar}) => {
  return (
    <>
      {/* Desktop navbar */}
      <div
        className={`h-full bg-[#f8f8f8] flex flex-col justify-between pt-5 pl-6 pb-14 md:pb-0 2xl:w-80 xl:w-52 w-44 absolute md:relative z-10 transition-transform duration-300 ${
          isNavbarOpen ? "translate-x-0" : "-translate-x-110 md:-translate-x-0"
        }`}
      >
        <a
          href="#"
          className="2xl:text-2xl xl:text-xl font-light text-red-600 mb-14 tracking-wider"
        >
          Teklap Product
        </a>
        <div className="flex flex-col flex-grow ">
          {navItems.map((item, index) => (
            <a
              onClick={() => handleNavClick(index)}
              key={index}
              href="#"
              className="xl:w-36 lg:w-32 w-30 flex items-center justify-between my-3.5 text-left cursor-pointer"
            >
              <i className={`${item.icon} text-xl text-pink-400`}></i>
              <span className="text-sm text-gray-500 mr-auto mx-2.5 tracking-wider">
                {item.label}
              </span>
              <i
                className={`text-lg text-yellow-400 ${
                  activePage === index ? item.activeIcon : item.inactiveIcon
                } `}
              ></i>
            </a>
          ))}
        </div>
        <div className="flex justify-between pr-6 pb-2">
          <a href="#">
            <i className="bxr  bx-envelope-alt text-2xl text-red-600"></i>
          </a>
          <a href="#">
            <i className="bxr  bx-phone text-2xl text-red-600"></i>
          </a>
        </div>
      </div>
      {/* Mobile navbar */}
      <button
        onClick={toggleNavbar}
        className="fixed md:hidden bottom-4 left-4 p-2 text-4xl text-blue-400"
      >
        {
            isNavbarOpen ?(
                <i className='bxr  bx-x'  ></i> 
            ):(
               
                <i className="bxr  bx-menu-wider"></i>
            )
        }
      </button>
    </>
  );
}

export default Navbar
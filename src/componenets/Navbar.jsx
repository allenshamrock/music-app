import React, { useState } from "react";
import {AiOutlineHome} from "react-icons/ai"
import {GiHamburgerMenu} from "react-icons/gi"
import {FaMusic} from "react-icons/fa"
import {TbRadio} from "react-icons/tb"
import {BsFilm} from "react-icons/bs"
import {IoClose} from "react-icons/io5"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };

  const handleLinkClick = () => {
    setIsOpen(false); 
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Logo */}
      <div className="bg-gray-900 text-white p-4">
        <h1 className="text-xl font-bold">Logo</h1>
      </div>

      {/* Navbar links */}
      <nav
        className={`flex-grow bg-gray-800 text-white p-4 ${
          isOpen ? "" : "hidden"
        } sm:flex sm:flex-col sm:space-y-4`}
      >
        <ul className="flex flex-col space-y-4">
          <li>
            <a
              href="#"
              className="hover:text-gray-300"
              onClick={handleLinkClick}
            >
              <AiOutlineHome/>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-gray-300"
              onClick={handleLinkClick}
            >
              <FaMusic/>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-gray-300"
              onClick={handleLinkClick}
            >
              <TbRadio/>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-gray-300"
              onClick={handleLinkClick}
            >
              <BsFilm/>
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu functionality */}
      <div className="flex justify-end sm:hidden p-4 lg:hidden h-full w-full">
        
      <GiHamburgerMenu
                onClick={()=> setIsOpen(true)}
                className='lg:hidden text-3xl cursor-pointer'/>

      <IoClose 
        onClick={()=>setIsOpen(false)}
        className='absolute right-6 top-6 text-3xl cursor-pointer'/>
      </div>
    </div>
  );
};

export default Navbar;

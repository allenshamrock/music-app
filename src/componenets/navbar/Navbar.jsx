import React from 'react'
import "./Header.css"
import {AiOutlineHome} from "react-icons/ai"
import {FaMusic} from "react-icons/fa"
import {TbRadio} from "react-icons/tb"
import {BsFilm} from "react-icons/bs"
const Navbar = () => {
  return (
    <nav className="hidden  lg:flex ">
        <ul className="flex-col flex-grow cursor-pointer">
            <li className="px-4 py-2 nav-link">
                <AiOutlineHome className="mr-2  bg-gray-500 hover:bg-yellow-400"/>
            </li>
            <li className="px-4 py-2 nav-link">
                <FaMusic className="mr-2 bg-gray-500 hover:bg-yellow-400"/>
            </li>
             <li className="px-4 py-2 nav-link">
                <TbRadio className="mr-2 bg-gray-500 hover:bg-yellow-400"/>
            </li> 
            <li className="px-4 py-2 nav-link">
                < BsFilm className="mr-2 bg-gray-500 hover:bg-yellow-400"/>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar

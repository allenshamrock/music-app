import React from 'react'
import "./Header.css"
import {IoClose} from "react-icons/io5"
import {AiOutlineHome} from "react-icons/ai"
import {FaMusic} from "react-icons/fa"
import {TbRadio} from "react-icons/tb"
import {BsFilm} from "react-icons/bs"
const MobileNav = ({setNavMobile}) => {
  return (
    <nav className='h-full w-full bg-gray-600 lg:hidden '>

        <IoClose 
        onClick={()=>setNavMobile(false)}
        className='absolute right-6 top-6 text-3xl cursor-pointer'/>

        <ul className='flex h-full  flex-col items-center justify-center capitalize cursor-pointer'>
            <li className='nav-link'><AiOutlineHome/>
            </li>
            <li className='nav-link'>
                <FaMusic/>
            </li>
            <li className='nav-link'>
                <TbRadio/>
            </li>
            <li className='nav-link'>
                <BsFilm/>
            </li>
        </ul>
    </nav>
  )
}

export default MobileNav
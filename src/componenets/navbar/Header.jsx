import React,{useState} from 'react'
import {GiHamburgerMenu} from "react-icons/gi"
import Navbar from "../navbar/Navbar.jsx"
import MobileNav from './MobileNav.jsx'

const Header = () => {
    const[navMobile, setNavMobile] =useState(false)
  return (
    <header className="py-3 ">
        <div className="mx-auto container">
            <div className="flex items-center justify-between">
                <Navbar/>

                {/* Mobile functionality */}
                <GiHamburgerMenu
                onClick={()=> setNavMobile(true)}
                className='lg:hidden text-3xl cursor-pointer'/>

                <div className={`${navMobile ? "right-0 " :"-right-full"}toggle`}>
                    <MobileNav setNavMobile={setNavMobile}/>
                </div>

                {/* End of mobile fuctionality */}
            </div>
        </div>
    </header>
  )
}

export default Header
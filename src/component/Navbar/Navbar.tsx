import React, { useState } from 'react'
import './Navbar.css'
import Logo from '../../assets/logo.png'
import SearchIcon from '../../assets/search_icon.svg'
import BellIcon from '../../assets/bell_icon.svg'
import ProfileIcon from '../../assets/profile_img.png'
import DropDownIcon from '../../assets/caret_icon.svg'
import { Menu, X } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { logout } from '../../firebase'

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navbar = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    window.addEventListener('scroll' , ()=> {
      if(window.scrollY > 80) {
        navbar.current?.classList.add('nav-dark')
      } else {
        navbar.current?.classList.remove('nav-dark')
      }
    })
  },[])
  
  return (
    <div ref={navbar} className="navbar w-full p-5 lg:p-[20px_70px] flex justify-between fixed  bg-opacity-80 text-[14px] text-slate-100 z-50 top-0 left-0 right-0">
      {/* Left Section */}
      <div className="nav-left flex items-center gap-[30px]">
        <img src={Logo} alt="LOGO" className="w-[90px]" />

        {/* Desktop Menu */}
        <ul className="hidden lg:flex list-none gap-[20px]">
          <li className="cursor-pointer hover:text-red-500">Home</li>
          <li className="cursor-pointer hover:text-red-500">TV Shows</li>
          <li className="cursor-pointer hover:text-red-500">Movies</li>
          <li className="cursor-pointer hover:text-red-500">New & Popular</li>
          <li className="cursor-pointer hover:text-red-500">My List</li>
          <li className="cursor-pointer hover:text-red-500">Languages</li>
        </ul>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden">
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Right Section */}
      <div className="nav-right hidden lg:flex gap-[20px] items-center">
        <img src={SearchIcon} alt="Search" className="w-6 cursor-pointer" />
        <p className="cursor-pointer">Children</p>
        <img src={BellIcon} alt="Notifications" className="w-6 cursor-pointer" />

        {/* Profile Dropdown */}
        <div
          className="relative flex items-center gap-[10px] cursor-pointer"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <img src={ProfileIcon} alt="Profile" className="w-[35px] rounded-md" />
          <img src={DropDownIcon} alt="Dropdown" />

          {dropdownOpen && (
            <div className="dropDown absolute top-full right-0 w-max bg-[#191919] rounded-md shadow-lg p-4">
              <p className="cursor-pointer text-[12px] hover:text-red-500" onClick={() => logout()}>Sign Out</p>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute top-[60px] left-0 w-full bg-black bg-opacity-90 flex flex-col items-center gap-4 py-6 text-white lg:hidden">
          <li className="cursor-pointer hover:text-red-500">Home</li>
          <li className="cursor-pointer hover:text-red-500">TV Shows</li>
          <li className="cursor-pointer hover:text-red-500">Movies</li>
          <li className="cursor-pointer hover:text-red-500">New & Popular</li>
          <li className="cursor-pointer hover:text-red-500">My List</li>
          <li className="cursor-pointer hover:text-red-500">Languages</li>
        </ul>
      )}
    </div>
  )
}

export default Navbar

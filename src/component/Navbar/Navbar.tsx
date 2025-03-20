import React from 'react'
import './Navbar.css'
import Logo from '../../assets/logo.png'
import SearchIcon from '../../assets/search_icon.svg'
import BellIcon from '../../assets/bell_icon.svg'
import ProfileIcon from '../../assets/profile_img.png'
import DropDownIcon from '../../assets/caret_icon.svg'
import { useEffect, useRef } from 'react'

const Navbar = () => {

  const navbar = useRef<HTMLElement | null>(null)

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
    <div ref={navbar} className='navbar w-full p-[20px_70px] flex justify-between fixed text-[14px] text-slate-100 z-10'  >
      <div className='nav-left flex items-center gap-[50px]'>
        <img src={Logo} alt="LOGO" className='w-[90px]'/>

        <ul className='flex list-none gap-[20px]'>
            <li className='cursor-pointer'>Home</li>
            <li className='cursor-pointer'>Home</li>
            <li className='cursor-pointer'>TV Shows</li>
            <li className='cursor-pointer'>TV Shows</li>
            <li className='cursor-pointer'>Movies</li>
            <li className='cursor-pointer'>New & Popular</li>
            <li className='cursor-pointer'>My List</li>
            <li className='cursor-pointer'>My List</li>
            <li className='cursor-pointer'>Browse By Languages</li>
        </ul>

      </div>
      <div className='nav-right flex gap-[20px] items-center'>
        <img src={SearchIcon} alt="" className='icons'/>
        <p>Children</p>
        <img src={BellIcon} alt="" className='icons'/>

        <div className='navbarProfile relative flex items-center gap-[10px] cursor-pointer'>
            <img src={ProfileIcon} alt="" className='profile rounded-[4px] w-[35px]'/>
            <img src={DropDownIcon} alt="" />
            <div className="dropDown hidden absolute top-full right-0 w-max bg-[#191919] rounded-[2px] underline z-[1] p-[18px_22px]">
                <p className='cursor-pointer text-[12px]'>Sign Out of Netflix</p>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar

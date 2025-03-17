import React from 'react'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'

const Footer = () => {
  return (
    <div className='p-[30px_4%] max-w-[1000px] m-[0_auto]'>
      <div className="footerIcons flex gap-[20px] m-[40px_0]" >
        <img src={facebook_icon} alt="" className='w-[30px]'/>
        <img src={twitter_icon} alt="" className='w-[30px]'/>
        <img src={instagram_icon} alt="" className='w-[30px]'/>
        <img src={youtube_icon} alt="" className='w-[30px]'/>
      </div>
      <ul className='grid grid-cols-[auto_auto_auto_auto] gap-[15px] mb-[30px] list-none'>
        <li>Audio Description</li>
        <li>Audio Description</li>
        <li>Audio Description</li>
        <li>Audio Description</li>
        <li>Audio Description</li>
        <li>Audio Description</li>
        <li>Audio Description</li>
        <li>Contact Us</li>
      </ul>
      <p className='text-gray-50 text-[14px]'>@©️ 1999-2025 , Inc</p>
    </div>
  )
}

export default Footer

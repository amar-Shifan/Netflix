import React from 'react'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'

const Footer = () => {
  return (
    <div className="p-8 max-w-[1000px] mx-auto text-gray-400 text-sm">
      {/* Social Media Icons */}
      <div className="footerIcons flex gap-5 justify-center md:justify-start my-6">
        <img src={facebook_icon} alt="Facebook" className="w-8 cursor-pointer hover:opacity-75" />
        <img src={twitter_icon} alt="Twitter" className="w-8 cursor-pointer hover:opacity-75" />
        <img src={instagram_icon} alt="Instagram" className="w-8 cursor-pointer hover:opacity-75" />
        <img src={youtube_icon} alt="YouTube" className="w-8 cursor-pointer hover:opacity-75" />
      </div>

      {/* Footer Links */}
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-6 list-none text-center md:text-left">
        <li><a href="#">Help Center</a></li>
        <li><a href="#">Investor Relations</a></li>
        <li><a href="#">Terms of Service</a></li>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Corporate Information</a></li>
        <li><a href="#">Jobs</a></li>
        <li><a href="#">Legal Notices</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>

      {/* Copyright */}
      <p className="text-center md:text-left text-gray-500">@© 1999-2025, Netflix Inc.</p>
    </div>

  )
}

export default Footer

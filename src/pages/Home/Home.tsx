import React from 'react'
import './Home.css'
import Navbar from '../../component/Navbar/Navbar'
import Footer from '../../component/Footer/Footer'
import TitleCards from '../../component/TitleCards/TitleCards'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'



const Home = () => {
  return (
    <div>
        <Navbar />

  {/* Hero Section */}
  <div className="hero relative">
    {/* Hero Banner */}
    <img src={hero_banner} alt="Hero Banner" className="hero_banner w-full object-cover" />

    {/* Hero Content */}
    <div className="absolute w-full px-6 bottom-0 text-white bg-gradient-to-t from-black/80 to-transparent p-6">
      {/* Hero Title */}
      <img src={hero_title} alt="Hero Title" className="w-[90%] max-w-[420px] mb-6" />

      {/* Description */}
      <p className="max-w-[700px] text-lg md:text-[17px] mb-4 md:mb-6 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat ex explicabo porro a voluptas, 
        omnis iusto natus accusantium! Placeat atque dolore porro vel totam nihil officiis quo consequuntur deleniti esse!
      </p>

      {/* Buttons */}
      <div className="flex gap-4 mb-8">
        <button className="flex items-center gap-3 px-5 py-2 text-black bg-white hover:bg-white/80 rounded-md font-semibold">
          <img src={play_icon} alt="Play" className="w-6" />
          Play
        </button>
        <button className="flex items-center gap-3 px-5 py-2 text-white bg-gray-600/80 hover:bg-gray-600/60 rounded-md font-semibold">
          <img src={info_icon} alt="More Info" className="w-6" />
          More Info
        </button>
      </div>

      {/* Title Cards */}
      <TitleCards />
    </div>
  </div>

  {/* More Cards Section */}
  <div className="more-cards px-6 md:px-[6%] space-y-8 md:space-y-12 mt-8">
    <TitleCards title="Blockbuster Movies" category="top_rated" />
    <TitleCards title="Only on Netflix" category="popular" />
    <TitleCards title="Upcoming" category="upcoming" />
    <TitleCards title="Top Picks for You" category="now_playing" />
  </div>

  <Footer />

    </div>
  )
}

export default Home

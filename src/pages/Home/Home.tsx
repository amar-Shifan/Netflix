import React from 'react'
import './Home.css'
import Navbar from '../../component/Navbar/Navbar'
import Footer from '../../component/Footer/Footer'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'


const Home = () => {
  return (
    <div>
        <Navbar/>

        <div className="hero relative">
            <img src={hero_banner} alt="" className='w-full  hero_banner'/>
            <div className='absolute w-full pl-6 bottom-0'>
                <img src={hero_title} alt="" className='w-[90%] max-w-[420px] mb-[30px]' />
                <p className='max-w-[700px] text-[17px] mb-[20px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Placeat ex explicabo porro a voluptas, omnis iusto natus
                    accusantium! Placeat atque dolore porro vel totam nihil officiis
                    quo consequuntur deleniti esse!
                </p>
                <div className='flex gap-[10px] mb-[50px]'>
                  <button className='bottom-0 outline-none p-[8px_20px] inline-flex items-center gap-[10px] text-black text-[15px] bg-white rounded-[4px] cursor-pointer font-semibold'>
                    <img src={play_icon}  alt=""  className='w-[25px]'/>
                    Play
                  </button >
                  <button className='bottom-0 outline-0 p-[8px_20px] inline-flex items-center gap-[10px] text-[#fff] bg-[#6d6d6eb3] text-[15px] bg-white rounded-[4px] cursor-pointer font-semibold'>
                    <img src={info_icon} alt="" className='w-[25px]'/>
                    More Info
                  </button>
                </div>

            </div>

        </div>
        <div></div>
        <Footer/>

    </div>
  )
}

export default Home

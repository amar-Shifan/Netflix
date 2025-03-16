import React, { useEffect, useRef } from 'react'
import './TitleCards.css'
import card_data from '../../assets/cards/Cards_data'

const TitleCards = () => {
  const cardsRef = useRef<HTMLDivElement | null>(null);

  const handleCard = (event: WheelEvent) => {
    event.preventDefault();
    if (cardsRef.current) {
      cardsRef.current.scrollLeft += event.deltaY;
    }
  };

  useEffect(() => {
    const div = cardsRef.current;
    if (div) {
      div.addEventListener("wheel", handleCard);
    }

    return () => {
      if (div) {
        div.removeEventListener("wheel", handleCard);
      }
    };
  }, []);
  

  return (
    <div className='mt-[50px] mb-[30px]'>
      <h2 className='mb-[8px]'>Popular on Netflix</h2>
      <div className='flex gap-[10px] overflow-x-scroll card-list' > 
        {card_data.map((card , index) => {
          return <div className='card relative flex-none' ref={cardsRef} key={index}>
            <img src={card.image} alt="" className='w-[240px] rounded-[4px] cursor-pointer ' />
            <p className='absolute bottom-[10px] right-[10px]'>{card.name}</p>
          </div>
        })}
      </div>  
    </div>
  )
}

export default TitleCards

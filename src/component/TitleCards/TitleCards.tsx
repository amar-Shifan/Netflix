import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import { Link } from 'react-router-dom';

const TitleCards = ({title , category}:{title?:string , category?:string}) => {
  interface Movie {
    id:string;
    backdrop_path: string;
    original_title: string;
  }

  const cardsRef = useRef<HTMLDivElement | null>(null);
  const [apiData , setApiData] = useState<Movie[]>([])

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZDI5N2MwYzA5ZGI0NmIzNGQwNzlmMzAzZTc2MjlhYyIsIm5iZiI6MTc0MjE5OTM2OS40MDUsInN1YiI6IjY3ZDdkYTQ5MzE2NzhjYzNmODAxOWQ3MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NHG3tVbH5fmO7UbQBeQgt8Pj3fveIfwSMZsUpRk49N4'
    }
  };
  


  const handleCard = (event: WheelEvent) => {
    event.preventDefault();
    if (cardsRef.current) {
      cardsRef.current.scrollLeft += event.deltaY;
    }
  };

  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/${category? category : 'now_playing'}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));

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
    <div className="mt-12 mb-8 px-4">
  <h2 className="mb-4 text-xl font-semibold text-white">{title || 'Popular on Netflix'}</h2>

  <div className=" card-list flex gap-4 overflow-x-auto scrollbar-hide snap-x scroll-smooth">
      {apiData.map((card, index) => (
        <Link
          to={`/player/${card.id}`}
          key={index}
          className="relative flex-none w-[60%] sm:w-[45%] md:w-[30%] lg:w-[22%] xl:w-[18%] snap-start"
        >
          <img
            src={card.backdrop_path
              ? `https://image.tmdb.org/t/p/w500${card.backdrop_path}`
              : '/background_banner.jpg'}
            alt={card.original_title}
            className="w-full h-auto rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105"
          />
          <p className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded-md">
            {card.original_title}
          </p>
        </Link>
      ))}
    </div>
  </div>

  )
}

export default TitleCards

import React, { useEffect, useState } from 'react'
import back_arrow from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {

  const {id} = useParams()
  const navigate = useNavigate()

  const [apiData , setApiData] = useState({
    name: '',
    key:'',
    published_at:'',
    type:''
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZDI5N2MwYzA5ZGI0NmIzNGQwNzlmMzAzZTc2MjlhYyIsIm5iZiI6MTc0MjE5OTM2OS40MDUsInN1YiI6IjY3ZDdkYTQ5MzE2NzhjYzNmODAxOWQ3MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NHG3tVbH5fmO7UbQBeQgt8Pj3fveIfwSMZsUpRk49N4'
    }
  };
  

  
  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));

  },[])
  return (
    <div className='h-[100vh] flex flex-col justify-center items-center'>
       <img src={back_arrow} alt="" className='absolute top-[20px] left-[20px] w-[50px] cursor-pointer' onClick={() => navigate(-2)}/>
        <iframe 
          src={`https://www.youtube.com/embed/${apiData.key}`}
          title='Trailer'  width='90%' height='90%' frameBorder='0' allowFullScreen
          className='rounded-[10px]'
          >
        </iframe>
       <div className='flex items-center justify-between w-[90%] '>
          <p>{apiData.published_at}</p>
          <p>{apiData.name}</p>
          <p>{apiData.type}</p>
       </div>
    </div>
  )
}

export default Player

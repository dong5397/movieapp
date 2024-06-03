import React, { useEffect, useState } from 'react';

function Home() {
    const [movies,setMovies]=useState([])
    useEffect(()=>{
        fetch("https://api.themoviedb.org/3/movie/popular?language=ko-KR&api_key=d2b0b43b2da1011cbe7d1f97761ce959")
        .then(res=>res.json())
        .then(res=>{setMovies(res.results)
        }
    )
    },[])

  return (
    <>
      <ul>
        {movies.map(row => (
          <li> {row.title}</li>
        ))}
      </ul>
    </>
  );
}

export default Home;

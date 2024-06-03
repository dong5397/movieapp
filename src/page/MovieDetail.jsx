import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function MovieDetail (){

    const param =useParams()
    console.log(param.id)
    const [movie,setMovie]=useState([])
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${param.id}?language=ko-KR&api_key=d2b0b43b2da1011cbe7d1f97761ce959`)
        .then(res=>res.json())
        .then(res=>{setMovie(res)
        }
    )
    },[])

    return(
    <div>
        <ul>{movie.id} / {movie.title}</ul>
    </div>
    )
}
export default MovieDetail;
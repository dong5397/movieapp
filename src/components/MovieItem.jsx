import React from "react";
import styled from "styled-components";

function MovieItem({ movie }) {
  return (
    <MovieItemContainer>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <MovieInfo>
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
      </MovieInfo>
    </MovieItemContainer>
  );
}

const MovieItemContainer = styled.div`
  position: relative;
  color: white;
`;

const MovieInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  background: rgba(0, 0, 0, 0.6);
  h2 {
    margin: 0;
    font-size: 24px;
  }
  p {
    margin: 10px 0 0;
    font-size: 16px;
  }
`;

export default MovieItem;

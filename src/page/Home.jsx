import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MovieItem from "../components/MovieItem";
import { useEffect, useState } from "react";
import { config } from "../data/constant.js";

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?language=ko-KR&api_key=${config.API_KEY}`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setMovies(data.results);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.toString());
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Container>
      <MoviePoster>
        <Carousel
          showThumbs
          autoPlay
          infiniteLoop
          showStatus={false}
          transitionTime={3}
        >
          {movies.map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
          ))}
        </Carousel>
      </MoviePoster>
    </Container>
  );
}

const Container = styled.div``;
const MoviePoster = styled.div`
  display: flex;
  align-items: center;
`;

export default Home;

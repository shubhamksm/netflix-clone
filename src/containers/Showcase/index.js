import React, { useEffect, useState } from "react";
import Carousel from "../Carousel";
import Frame from "./Frame";
import { fetchApi } from "../../api/main";
import "./Showcase.scss";

const Showcase = () => {
  const [movies, setMovies] = useState(null);

  async function fetchTrendingMovies() {
    const response = await fetchApi("movie", "trending/movie/day");
    setMovies(response.results.slice(0, 5));
  }

  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  return (
    <div style={{ height: "80vh" }}>
      {movies && (
        <Carousel pages={5}>
          {movies.map((movie, index) => (
            <Frame {...movie} key={index} index={index} />
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default Showcase;

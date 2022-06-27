import React, { useEffect, useState } from "react";
import Frame from "./Frame";
import { fetchApi } from "../../api/main";
import "./Showcase.scss";

const Showcase = () => {
  const [currentFrame, updateFrame] = useState(null);
  const [movies, setMovies] = useState(null);

  async function fetchTrendingMovies() {
    const response = await fetchApi("movie", "trending/movie/day");
    setMovies(response.results);
    updateFrame(response.results[0]);
  }

  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  return currentFrame && <Frame {...currentFrame} key={currentFrame.id} />;
};

export default Showcase;

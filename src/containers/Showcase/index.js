import React, { useEffect, useState, useCallback } from "react";
import { useSwipeable } from "react-swipeable";
import Frame from "./Frame";
import { fetchApi } from "../../api/main";
import "./Showcase.scss";
import Button from "./Button";

const Showcase = () => {
  const [currentFrame, updateFrame] = useState(0);
  const [movies, setMovies] = useState(null);
  const handlers = useSwipeable({
    onSwipedLeft: () => updateSlide("left"),
    onSwipedRight: () => updateSlide("right"),
  });

  async function fetchTrendingMovies() {
    const response = await fetchApi("movie", "trending/movie/day");
    setMovies(response.results.slice(0, 5));
  }

  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  const updateSlide = (dir) => {
    if (dir === "left") {
      updateFrame(currentFrame === 0 ? movies.length - 1 : currentFrame - 1);
    } else {
      updateFrame(currentFrame === movies.length - 1 ? 0 : currentFrame + 1);
    }
  };

  const getCurrentMovie = useCallback(() => {
    return movies && <Frame {...movies[currentFrame]} />;
  }, [currentFrame, movies]);

  return (
    movies && (
      <div className="showcase" {...handlers}>
        <Button dir="left" handleClick={() => updateSlide("left")} />
        <Button dir="right" handleClick={() => updateSlide("right")} />
        {getCurrentMovie()}
      </div>
    )
  );
};

export default Showcase;

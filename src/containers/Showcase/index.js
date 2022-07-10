import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import Frame from "./Frame";
import { fetchApi } from "../../api/main";
import "./Showcase.scss";
import Button from "./Button";

const Showcase = () => {
  const [currentFrame, updateFrame] = useState(0);
  const [movies, setMovies] = useState(null);
  const handlers = useSwipeable({
    onSwipedLeft: () => updateSlide("right"),
    onSwipedRight: () => updateSlide("left"),
  });

  async function fetchTrendingMovies() {
    const response = await fetchApi("movie", "trending/movie/day");
    setMovies(response.results.slice(0, 5));
  }

  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      document
        ?.getElementById(`slide-${currentFrame}`)
        ?.scrollIntoView({ behavior: "smooth" });
    }, 200);
  }, [currentFrame]);

  const updateSlide = (dir) => {
    if (dir === "left") {
      updateFrame(currentFrame === 0 ? movies.length - 1 : currentFrame - 1);
    } else {
      updateFrame(currentFrame === movies.length - 1 ? 0 : currentFrame + 1);
    }
  };

  return (
    movies && (
      <>
        <Button dir="left" handleClick={() => updateSlide("left")} />
        <Button dir="right" handleClick={() => updateSlide("right")} />
        <div className="showcase" {...handlers}>
          {movies && (
            <div className="frames">
              {movies.map((movie, index) => (
                <Frame {...movie} key={index} index={index} />
              ))}
            </div>
          )}
        </div>
      </>
    )
  );
};

export default Showcase;

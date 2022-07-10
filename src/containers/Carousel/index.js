import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { StyledFrames } from "./carousel.style";
import Button from "./Button";
import "./Carousel.scss";

const Carousel = ({ pages, children }) => {
  const [currentPage, updateCurrentPage] = useState(0);
  const handlers = useSwipeable({
    onSwipedLeft: () => updateSlide("right"),
    onSwipedRight: () => updateSlide("left"),
  });

  const updateSlide = (dir) => {
    if (dir === "left") {
      updateCurrentPage(currentPage === 0 ? pages - 1 : currentPage - 1);
    } else {
      updateCurrentPage(currentPage === pages - 1 ? 0 : currentPage + 1);
    }
  };

  return (
    <div className="showcase" {...handlers}>
      <Button dir="left" handleClick={() => updateSlide("left")} />
      <Button dir="right" handleClick={() => updateSlide("right")} />
      <StyledFrames currentPage={currentPage}>{children}</StyledFrames>;
    </div>
  );
};

export default Carousel;

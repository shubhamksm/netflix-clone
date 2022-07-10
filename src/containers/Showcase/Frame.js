import React from "react";
import { IMAGE_BASE_PATH } from "../../api/constants";

const Frame = ({ title, overview, backdrop_path, index }) => {
  return (
    <div className="frame" id={`slide-${index}`}>
      <h1>{title}</h1>
      <p>{overview}</p>
      <img src={`${IMAGE_BASE_PATH}original${backdrop_path}`} alt={title} />
    </div>
  );
};

export default Frame;

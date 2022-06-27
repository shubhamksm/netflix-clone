import React from "react";
import { IMAGE_BASE_PATH } from "../../api/constants";

const Frame = ({ title, overview, backdrop_path }) => {
  return (
    <>
      <div className="frame">
        <h1>{title}</h1>
        <p>{overview}</p>
      </div>
      <img src={`${IMAGE_BASE_PATH}original${backdrop_path}`} alt={title} />
    </>
  );
};

export default Frame;

import React from "react";
import classNames from "classnames";

const Button = ({ dir, handleClick }) => {
  return (
    <button
      className={classNames("showcase__button", `showcase__button--${dir}`)}
      onClick={handleClick}
    >
      {dir === "left" ? "<" : ">"}
    </button>
  );
};

export default Button;

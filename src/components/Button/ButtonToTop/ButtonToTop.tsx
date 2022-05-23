import React from "react";
import { FiChevronsUp } from "react-icons/fi";
import "./ButtonToTop.scss";

const ButtonToTop = () => {
  // Back to Top
  const handleBackToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <button className="btn__top" onClick={handleBackToTop}>
        <FiChevronsUp />
      </button>
    </div>
  );
};

export default ButtonToTop;

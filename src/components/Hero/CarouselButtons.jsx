import React from "react";

export const CarouselButtons = ({ current_position }) => {
  const backward = (position = 0) => {
    if (position === 0) return;
    return position--;
  };
  const forward = (position = 0) => {
    // if (position === 0) return;
    return position++;
  };
  return (
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-10">
      <a
        href={`#slide${backward(current_position)}`}
        className="btn btn-circle"
      >
        ❮
      </a>
      <a href={`#slide${forward(current_position)}`} className="btn btn-circle">
        ❯
      </a>
    </div>
  );
};

import React from "react";

const RectangleWithText = (props) => {
    const {id, x, y, text} = props;
  return (
    <text
      id={id}
      x={x}
      y={y}
      dominant-baseline="middle"
      text-anchor="middle"
      font-size="15"
    >
      {text}
    </text>
  );
};

export default RectangleWithText;

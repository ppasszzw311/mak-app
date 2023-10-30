import React from "react";

const Rectangle = (props) => {
    const {id, x, y, width, height, fill, stroke} = props;
  return (
    <rect
      id={id}
      x={x}
      y={y}
      width={width}
      height={height}
      fill={fill}
      stroke={stroke}
    />
  );
};

export default Rectangle;

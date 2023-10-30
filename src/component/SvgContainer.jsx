import React from "react";
import { useSelector } from "react-redux";
import RectangleWithText from "./RectangleWithText";

const SvgContainer = () => {
  // 取得redux中的grid, count資料
  const grid = useSelector((state) => state.baseGrid.grid);
  const count = useSelector((state) => state.baseGrid.count);
  console.log(grid, count);
  const size = convertLength(grid);
  console.log(size);
  const baseGrid = convertBaseGrid(size, count);
  console.log(baseGrid);
  return (
    <svg
      id="svg"
      width="100%"
      height="560px"
      viewBox="0 0 210 512.4409448818898"
    >
        {baseGrid.map((item, index) => (
            <>
            <rect
                key={index}
                x={item.x}
                y={item.y}
                width={size.width}
                height={size.long}
                fill="none"
                stroke="blue"
            />
            <RectangleWithText id={index} x={item.x + size.width / 2} y={item.y + size.long / 2} text={count.zCount}/>
            </>
        ))}
    </svg>
  );
};

export default SvgContainer;

const convertLength = (size) => {
  const { long, width } = size;
  if (long > width){
    return {
        long: long / width * 30,
        width: 30,
    }
  } else {
    return {
        long: 30,
        width: width / long * 30,
    }
  }
};

const convertBaseGrid = (size, count) => {
    const { long, width } = size;
    const { xCount, yCount } = count;
    const grid = [];
    for (let i = 0; i < xCount; i++) {
        for (let j = 0; j < yCount; j++) {
        grid.push({
            x: i * width,
            y: j * long,
        });
        }
    }
    return grid;
}

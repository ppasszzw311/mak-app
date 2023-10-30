import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPageToNext } from "../redux/reducers/page";
import {
  setProjectNumber,
  setXCount,
  setYCount,
  setZCount,
  setRoleAnchor,
  setLong,
  setWidth,
  setHeight,
} from "../redux/reducers/baseGrid";
import DropdownOption from "./DropdownOption";

const InputForm = () => {
  const size = useSelector((state) => state.baseGrid.size);
  const role = useSelector((state) => state.baseGrid.role);
  const dispatch = useDispatch();
  const [grid, setGrid] = useState({
    long: 0,
    width: 0,
    height: 0,
  });

  const [count, setCount] = useState({
    xCount: 0,
    yCount: 0,
    zCount: 0,
  });
  const handleNextClick = () => {
    dispatch(setPageToNext());
  };
  const handlProjectChange = (e) => {
    dispatch(setProjectNumber(e.target.value));
  };
  const handleSelect = (name, value) => {
    console.log(name, value);
    switch (name) {
      case "anchor":
        dispatch(setRoleAnchor(value));
        break;
      case "long":
        dispatch(setLong(Number(value)));
        break;
      case "width":
        dispatch(setWidth(Number(value)));
        break;
      case "height":
        dispatch(setHeight(Number(value)));
        break;
      default:
        break;
    }
  };
  return (
    <>
      <h3>步驟一</h3>
      <label>
        輸入工程標號
        <input type="text" onChange={handlProjectChange} />
      </label>

      <h6>輸入每格大小</h6>
      <div>
        <label>架長(m)*</label>
        <DropdownOption name="long" options={size.long} select={handleSelect} />
      </div>

      <label>架寬(m)*</label>
      <DropdownOption name="width" options={size.width} select={handleSelect} />
      <label>架高(m)*</label>
      <DropdownOption
        name="height"
        options={size.height}
        select={handleSelect}
      />
      <h6>輸入平面格數</h6>
      <label>
        長(格數)*
        <input
          type="number"
          name="xCount"
          onChange={(e) => dispatch(setXCount(Number(e.target.value)))}
        />
      </label>
      <label>
        寬(格數)*
        <input
          type="number"
          name="yCount"
          onChange={(e) => dispatch(setYCount(Number(e.target.value)))}
        />
      </label>
      <label>
        高(層數)*
        <input
          type="number"
          name="zCount"
          onChange={(e) => dispatch(setZCount(Number(e.target.value)))}
        />
      </label>
      <h6>輸入工程規則</h6>
      <label>設定錨定點規則</label>
      <DropdownOption
        name="anchor"
        options={role.anchor}
        select={handleSelect}
      />

      <div>
        <button onClick={handleNextClick}>繼續下一步</button>
      </div>
    </>
  );
};

export default InputForm;

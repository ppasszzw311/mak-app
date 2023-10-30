import { useDispatch } from "react-redux";
import { setPageToNext, setPageToBack } from "../redux/reducers/page";
import SvgContainer from "./SvgContainer";

const BaseGrid = () => {
  const dispatch = useDispatch();

  const onHandlePrevClick = () => {
    dispatch(setPageToBack());
  };
  const onHandleNextClick = () => {
    dispatch(setPageToNext());
  };
  return (
    <div>
      <div>
        <h3>步驟2</h3>
        <p>產生平面底圖，輸入高度、梯位、錨錠點</p>
        <SvgContainer />
        <button onClick={onHandlePrevClick}>回到上一步</button>
        <button>取消</button>
        <button onClick={onHandleNextClick}>繼續下一步</button>
      </div>
    </div>
  );
};

export default BaseGrid;

import { useDispatch } from "react-redux";
import { setPageToBack, setReSetPage } from "../redux/reducers/page";

const ReviewAndFinish = () => {
  const dispatch = useDispatch();
  const onHandleComplete = () => {
    dispatch(setReSetPage());
  };
  const onHandlePrevClick = () => {
    dispatch(setPageToBack());
  };
  return (
    <div>
      <h3>步驟 4</h3>
      <p>三視圖結果、匯出</p>
      <div>
        <button onClick={onHandlePrevClick}>返回上一步</button>
        <button onClick={onHandleComplete}>完成</button>
      </div>
    </div>
  );
};

export default ReviewAndFinish;

import { useDispatch } from "react-redux"
import { setPageToNext, setPageToBack} from "../redux/reducers/page"

const FiveView = () => {
    const dispatch = useDispatch();
    const onHandleNextClick = () => {
        dispatch(setPageToNext())
    }
    const onHandlePrevClick = () => {
        dispatch(setPageToBack())
    }
  return (
    <div>
        <div>
            <h3>步驟3</h3>
            <p>產生正、側視圖，輸入橫桿高、錨定點、生成斜撐</p>
            <button onClick={onHandlePrevClick}>返回上一步</button>
            <button>取消</button>
        <button onClick={onHandleNextClick}>繼續下一步</button>
    </div>
    </div>
  )
}

export default FiveView
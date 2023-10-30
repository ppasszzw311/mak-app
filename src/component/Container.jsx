import { useSelector, useDispatch } from "react-redux";
import {
  setPageToNext,
  setPageToBack,
  setReSetPage,
} from "../redux/reducers/page";
import InputForm from "./InputForm";
import BaseGrid from "./BaseGrid";
import FiveView from "./FiveView";
import ReviewAndFinish from "./ReviewAndFinish";

const Container = () => {
  const page = useSelector((state) => state.page.page);
  return (
    <div>
     {page === 1 ? <InputForm /> : null}
     {page === 2 ? <BaseGrid /> : null}
     {page === 3 ? <FiveView /> : null}
     {page === 4 ? <ReviewAndFinish /> : null}
    </div>
  );
};

export default Container;

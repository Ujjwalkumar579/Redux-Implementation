import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseValue, decreaseValue } from "./redux/Action-creator";
const Counter = () => {
  const myState = useSelector((state) => state.ourState.count);
  console.log(myState);
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(increaseValue())}>+</button>
      <h5>{myState}</h5>
      <button onClick={() => dispatch(decreaseValue())}>-</button>
    </>
  );
};

export default Counter;

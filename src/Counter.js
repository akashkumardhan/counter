import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementValue, decrementValue } from "./actions";

const Counter = () => {
  const counterValue = useSelector((state) => state?.value);
  const dispatch = useDispatch();

  const incrementCounter = () => {
    console.log("incrementValue: ", incrementValue);
    dispatch(incrementValue());
  };
  const decrementCounter = () => {
    dispatch(decrementValue());
  };

  return (
    <div>
      <p>{counterValue}</p>
      <button
        onClick={() => {
          incrementCounter();
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          decrementCounter();
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;

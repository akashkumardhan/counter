import { INCREMENT, DECREMENT } from "./actionTypes";
export function incrementValue() {
  return {
    type: INCREMENT
  };
}

export function decrementValue() {
  return {
    type: DECREMENT
  };
}

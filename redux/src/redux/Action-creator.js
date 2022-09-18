import * as actionType from "./Action-types";

export const increaseValue = () => {
  return {
    type: actionType.INCREMENT
  };
};

export const decreaseValue = () => {
  return {
    type: actionType.DECREMENT
  };
};

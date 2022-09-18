import * as actionType from "./Action-types";

const initialState = { count: 0 };

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };

    case actionType.DECREMENT:
      return {
        ...state,
        count: state.count - 1
      };

    default:
      return state;
  }
};

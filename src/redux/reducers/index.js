import INCREMENT from "../actions/increment";
import DECREMENT from "../actions/decrement";

const initState = {
  number: 0,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        number: state.number + 1,
      };
    case DECREMENT:
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
};
export default reducer;

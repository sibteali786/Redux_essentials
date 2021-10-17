import { NEW_POST, FETCH_POSTS } from "../actions/types";

const initiaState = {
  items: [],
  item: {}
};

export default function (state = initiaState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload
      };
    case NEW_POST:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
}

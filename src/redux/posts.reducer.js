import { POSTS_LOAD_SUCCESS, POSTS_LOAD_FAILURE } from "./posts.types";

// TODO: didn't have to time to handle errors better.
const INITIAL_STATE = {
  posts: [],
  error: "",
};

const reducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  console.log(action.payload);
  switch (type) {
    case POSTS_LOAD_SUCCESS:
      return {
        ...state,
        posts: [...state.posts, ...payload],
      };

    case POSTS_LOAD_FAILURE:
      return {
        ...state,
        error: payload,
      };

    default:
      return state;
  }
};

export default reducer;

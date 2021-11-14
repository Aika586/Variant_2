import axios from "axios";
import { POSTS_LOAD_SUCCESS, POSTS_LOAD_FAILURE } from "./posts.types";

const POSTS_API = `https://jsonplaceholder.typicode.com/posts`;

export const getPosts = () => {
  return (dispatch) => {
    return axios
      .get(POSTS_API)
      .then(({ data }) => {
        console.log("data", data);
        dispatch({
          type: POSTS_LOAD_SUCCESS,
          payload: data,
        });
      })
      .catch((err) => {
        dispatch({
          type: POSTS_LOAD_FAILURE,
          payload: err.message,
        });
      });
  };
};

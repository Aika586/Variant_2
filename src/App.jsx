import React, { useEffect } from "react";
import { hot } from "react-hot-loader/root";
import PropTypes from "prop-types";
import Posts from "./components/posts";
import { getPosts } from "./redux/actions";
import { useSelector, useDispatch } from "react-redux";
import Form from "./components/Forms.jsx";

const App = () => {
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);
  return (
    <div>
      <Form />
      <Posts posts={posts} />
    </div>
  );
};

export default hot(App);

App.propTypes = {
  getPosts: PropTypes.func,
  posts: PropTypes.instanceOf(Array),
};

import React from "react";
import PropTypes from "prop-types";
import style from "./posts.css";
import ReactPaginate from "react-paginate";
import { useState, useEffect } from "react";

// TODO: didn't have to time to handle errors in this component.
// Think about what might happen if posts data is undefined or length is 0 or fetch data is failed
// do some validation
function Posts({ posts, itemsPerPage = 4 }) {
  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(posts.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(posts.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % posts.length;
    setItemOffset(newOffset);
  };
  return (
    <div className={style["news"]}>
      <h1 className={style["top_news"]}>Posts</h1>
      {currentItems.map((post) => {
        return (
          <div key={post.id}>
            {" "}
            {post.id} - {post.title}
          </div>
        );
      })}
      <ReactPaginate
        breakLabel="..."
        nextLabel="next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="previous"
        renderOnZeroPageCount={null}
      />
    </div>
  );
}

Posts.propTypes = {
  news: PropTypes.instanceOf(Array),
};

export default Posts;

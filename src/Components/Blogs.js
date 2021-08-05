import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectUserInput, setBlogData } from "../features/userSlice";

import "../styling/blogs.css";

const Blogs = (props) => {
  const searchInput = useSelector(selectUserInput,[]);

  //const blog_url = `https://newsapi.org/v2/everything?q=${searchInput}&from=2021-07-04&sortBy=publishedAt&apiKey=6bac4db6f3d74c0c8ea79d91f1b11e42`;

  const blog_url = `https://gnews.io/api/v4/search?q=${searchInput}&token=01dc51d14f5a7f6002e31110211b3a92`;
  const dispatch = useDispatch();
  const [blogs, setBlogs] = useState();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(blog_url)
      .then((response) => {
        dispatch(setBlogData(response.data));
        setBlogs(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[searchInput]);

  return (
    <div className="blog__page">
      <h1 className="blog__page__header"> {searchInput} </h1>
      {loading ? <h1 className="loading">Loading...</h1> : ""}
      <div className="results">
      Search Results {blogs?.totalArticles}
      </div>
      <div className="blogs">
        {blogs?.articles?.map((blog) => (
          <a className="blog" target="_blank" rel="noopener noreferrer" href={blog.url}>
            <img src={blog.image} alt="newsimage" />
            <div>
              <h3 className="sourceName">
                <span>{blog.source.name}</span>
                <p>{blog.publishedAt}</p>
              </h3>
              <h1>{blog.title}</h1>
              <p>{blog.description}</p>
            </div>
          </a>
        ))}

        {blogs?.totalArticles === 0 && (
          <h1 className="no__blogs">
            No blogs available <span role="img" aria-label="book">😞</span>. Search something else to read blogs on the
            greatest platform.
          </h1>
        )}
      </div>
    </div>
  );
};

export default Blogs;

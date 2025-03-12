// ContentHooks.js

import React, { useState, useEffect } from "react";
import PostItem from "./PostItem";
import Loader from "./Loader";
import posts from "./posts.json";
import styles from "../Content.module.css";


const ContentHooks = () => {
  // Use State
  const [fetchedPosts, setFetchedPosts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Use Effect
  useEffect(() => {
    // Simulate fetching data from an API
    const timer = setTimeout(() => {
      setIsLoaded(true);
      setFetchedPosts(posts);
    }, 2000);

    // Clean up the timer when the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  // Handle Change
  const handleChange = (event) => {
    const filteredPosts = posts.filter((post) =>
      post.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFetchedPosts(filteredPosts);
  };

  return (
    <div className={styles.content}>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search posts..."
          onChange={handleChange}
        />
      </div>
      {isLoaded ? (
        fetchedPosts.map((post) => <PostItem key={post.id} post={post} />)
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default ContentHooks;

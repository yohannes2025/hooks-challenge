import React, { Component } from "react";
import PostItem from "./PostItem";
import Loader from "./Loader";
import posts from "./posts.json";
import styles from "./Content.module.css";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      posts: [],
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoaded: true,
        posts: posts,
      });
    }, 2000);
  }

  handleChange = (event) => {
    const searchText = event.target.value.toLowerCase();
    const filteredPosts = posts.filter((post) =>
      post.title.toLowerCase().includes(searchText)
    );
    this.setState({ posts: filteredPosts });
  };

  render() {
    const { isLoaded, posts } = this.state;

    return (
      <div className={styles.content}>
        <input
          type="text"
          placeholder="Search posts..."
          onChange={this.handleChange}
        />
        {!isLoaded ? (
          <Loader />
        ) : (
          <div>
            {posts.map((post) => (
              <PostItem key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Content;

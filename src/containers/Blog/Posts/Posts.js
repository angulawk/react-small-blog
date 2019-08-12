import Post from "../../../components/Post/Post";
import React, {Component} from "react";
import axios from "axios";
import "./Posts.css";

class Posts extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    axios.get("/posts").then(response => {
      const posts = response.data.slice(0, 4);
      const updatedPosts = posts.map(post => {
        return {
          ...post,
          author: "Agnieszka"
        };
      });
      this.setState({posts: updatedPosts});
    });
  }

  postSelectedHandler = id => {
    this.setState({selectedPostId: id});
  };

  render() {
    let posts = <p>Something went wrong</p>;
    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            onClick={this.postSelectedHandler}
            id={post.id}
          />
        );
      });
    }

    return <section className="Posts">{posts}</section>;
  }
}

export default Posts;

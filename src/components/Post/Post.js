import React from "react";

import "./Post.css";

function Post({title, author, onClick, id}) {
  function handlePostClick() {
    onClick(id);
  }

  return (
    <article className="Post" onClick={handlePostClick}>
      <h1>{title}</h1>
      <div className="Info">
        <div className="Author">{author}</div>
      </div>
    </article>
  );
}

export default Post;

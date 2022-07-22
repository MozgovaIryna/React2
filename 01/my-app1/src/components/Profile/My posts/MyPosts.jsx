import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import store from "../../../redux/state";

const MyPosts = ({ post }) => {
  let newPostElement = React.createRef();

  let addPost = () => {
        store.addPost();
  
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
   store.updateNewPostText();
  }

  return (
    <div>
      <div>
        <h2>MyPosts</h2>
      </div>

      <div>
        <textarea ref={newPostElement}></textarea>
      </div>
      <button onClick={store.addPost}> Add post </button>
      <div className={s.posts}>
        {post.map((p) => (
          <Post message={p.message} likesCount={p.likesCount} />
        ))}
      </div>
    </div>
  );
};

export default MyPosts;

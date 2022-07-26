import React from "react";
import store from "../../../redux/state";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = ({ message }) => {
  /* let newPostElement = React.createRef(); */

  // let addPost = () => {
  //       store.addPost();

  // };

  // let onPostChange = () => {
  //   let text = newPostElement.current.value;
  //  store.updateNewPostText();}
  return (
    <div>
      <div>
        <h2>MyPosts</h2>
      </div>

      <div>
        <textarea></textarea>
      </div>
      <button> Add post </button>
      <div className={s.posts}>
        {message.map((p) => (
          <Post message={p.message} likesCount={p.likesCount} />
        ))}
      </div>
    </div>
  );
};

export default MyPosts;

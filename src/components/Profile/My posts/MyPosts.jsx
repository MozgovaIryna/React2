import React from "react";
import store from "../../../redux/state";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { ReactDOM } from "react";

const MyPosts = ({ message }) => {
  let newPost = React.createRef();
  let addPost = () => {
    debugger;
    let text = newPost.current.value;
    store.addPost(text);

    /* alert(text); */
  };

  // let onPostChange = () => {
  //  store.updateNewPostText();}
  return (
    <div>
      <div>
        <h2>MyPosts</h2>
      </div>

      <div>
        <textarea ref={newPost}></textarea>
      </div>
      <button onClick={addPost}> Add post </button>
      <div className={s.posts}>
        {message.map((p) => (
          <Post message={p.message} likesCount={p.likesCount} />
        ))}
      </div>
    </div>
  );
};

export default MyPosts;

import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./My posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = ({ store }) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        post={store.page.postData}
        addPost={store.addPost}
        updateNewPostText={store.updateNewPostText}
      />
    </div>
  );
};

export default Profile;

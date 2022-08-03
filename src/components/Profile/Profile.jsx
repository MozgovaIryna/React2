import React from "react";
import MyPosts from "./My posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import News from "./../News/News";

const Profile = ({ page, addPost, updateNewPostText }) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        message={page.postData}
        newPostText={page.newPostText}
        addPost={addPost} 
        updateNewPostText={updateNewPostText}
      />
    </div>
  );
};

export default Profile;

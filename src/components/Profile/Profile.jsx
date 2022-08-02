import React from "react";
import MyPosts from "./My posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = ({ page, addPost, updateNewPostText }) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        message={page.postData}
        /* addPost={addPost} */
       /*  updateNewPostText={updateNewPostText} */
      />
    </div>
  );
};

export default Profile;

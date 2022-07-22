import React from "react";
import s from "./ProfileInfo.module.css";


const ProfileInfo = () => {
  return (
    <div className={s.postsBlock}>
       <div className={s.newBlock}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIYwzsiUEnWW7BYLJ35SY8GoAyPTmf4JtHXw&usqp=CAU" />
       </div>
      <div>ava+discription</div>
    </div>
  );
};

export default ProfileInfo;

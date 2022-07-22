import React from "react";
import s from "./../Dialoges.module.css";
import { NavLink } from "react-router-dom";

const Message = ({ message }) => {
  let newMessage = React.createRef();
  let addMessage = () => {
    let text = newMessage.current.value;
    alert(text);
  };

  return (
    <div className={s.dial}>
      <div className={s.circle}></div>
      <div className={s.message}>{message}</div>
      <textarea ref={newMessage}></textarea>
      <button onClick={addMessage}>Add message</button>
    </div>
  );
};

export default Message;

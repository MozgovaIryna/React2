import React from "react";
import s from './../Dialogs.module.css';


const Message = (props) => {
 /*  let newMessage = React.createRef();
  let addMessage = () => {
    let text = newMessage.current.value;
    alert(text);
  }; */

  return (
    <div className={s.dial}>
      <div className={s.circle}></div>
      <div className={s.message}>{props.message}</div>
      {/* <textarea ref={props.newMessage}></textarea>
      <button onClick={props.addMessage}>Add message</button> */}
    </div>
  );
};

export default Message;



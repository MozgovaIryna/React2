import React from "react";
import s from "./Dialoges.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

<DialogItem />;

<Message />;

const Dialoges = ({ page }) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogItem}>
        {page.dialogsData.length &&
          page.dialogsData.map((dialog) => (
            <DialogItem
              key={dialog.id}
              name={dialog.name}
              id={dialog.id}
              photo={dialog.photo}
            />
          ))}
      </div>
      <div className={s.message}>
        {page.messagesData.length &&
          page.messagesData.map((message) => (
            <Message key={message.id} message={message.message} />
          ))}
      </div>
    </div>
  );
};

export default Dialoges;

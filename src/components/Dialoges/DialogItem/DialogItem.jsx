import React from "react";
import s from "./../Dialoges.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = ({ name, id, photo }) => {
  return (
    <div className={s.dialog}>
      <div className={s.img}><img src={photo} alt="01" /></div>
      
      <NavLink to={`/dialoges/${id}`}>{name} </NavLink>

     
    </div>
  );
};

export default DialogItem;

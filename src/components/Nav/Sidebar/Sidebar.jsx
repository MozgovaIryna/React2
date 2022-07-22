import React from "react";
import s from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";

const Sidebar = ({ id, photo, name }) => {
  return (
    <div className={s.sidebar}>
      <div className={s.circle}></div>

      <NavLink to={`/sidebar/${id}`}>{name} </NavLink>
    </div>
  );
};

export default Sidebar;

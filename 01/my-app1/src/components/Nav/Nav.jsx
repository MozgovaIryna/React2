import React from "react";
import s from "./Nav.module.css";
import { NavLink } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";

<Sidebar/>
const Nav = ({store}) => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile">Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/dialoges">Messages</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/news">News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/music">Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/settings">Settings</NavLink>
      </div>
      <div className={s.item}>
      <h3>Friends</h3>
      <div>
        {friends.map((side)=>(<Sidebar key={side.id} name={side.name} photo={side.photo} id={side.id}/>))}
       </div>
      </div>
    </nav>
  );
};

export default Nav;

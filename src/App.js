import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dialoges from "./components/Dialoges/Dialogs";
import Header from "./components/Header/Header";
import Music from "./components/Music/Music";
import Nav from "./components/Nav/Nav";
import News from "./components/News/News";
import Profile from "./components/Profile/Profile";
import Settings from "./components/Settings/Settings";
import store from "./redux/state";

<<<<<<< HEAD
const App = () => {
<<<<<<< HEAD
  console.log(store._state.profilePage);
  return (
    <div className="app-wrapper">
      <Header />
=======
  
=======
const App = (props) => {
 
>>>>>>> f16b06e7aeeaab776087479862cb21ae0512192f
  return (
    <div className="app-wrapper">
      <Header />
      <Nav sidebar = {store._state.sidebar}/> 
>>>>>>> dc9d00a0f30a5a16c0b717f0b445d0258107456f
      <div className="app-wrapper-content">
        
          <Routes>
            <Route path="/" element={
              <Nav store={store._state.sidebar} />} />
            <Route
              path="/dialoges/*"
              element={<Dialoges state={props.state.dialogsPage} />}
            />
            <Route
              path="/profile"
              element={
                <Profile
                profilePage={props.state.profilePage}
                dispatch={props.dispatch}
                  /* addPost={store._state.addPost}
                  updateNewPostText={store._state.updateNewPostText} */
                />
              }
            />
            <Route path="/music" element={<Music />} />
            <Route path="/news" element={<News />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
  
      </div>
    </div>
  );
};

export default App;

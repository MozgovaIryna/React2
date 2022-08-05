import React from "react";
import "./App.css";
import Dialoges from "./components/Dialoges/Dialogs";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import store from "./redux/state";

const App = (props) => {
 
  return (
    <div className="app-wrapper">
      <Header />
      <Nav sidebar = {store._state.sidebar}/> 
      <div className="app-wrapper-content">
        
          <Routes>
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

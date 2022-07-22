import React from "react";
import "./App.css";
import Dialoges from "./components/Dialoges/Dialoges";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import store from "./redux/state";

const App = () => {
  console.log(store._state);
  return (
    <div className="app-wrapper">
      <Header />
      {/* <Nav store={store._state.sidebar} /> */}
      <div className="app-wrapper-content">
        <BrowserRouter>
          <Routes>
            <Route
              path="/dialoges/*"
              element={<Dialoges page={store._state.dialogsPage} />}
            />
            <Route
              path="/profile"
              element={
                <Profile
                  page={store._state.profilePage}
                  addPost={store._state.addPost}
                  updateNewPostText={store._state.updateNewPostText}
                />
              }
            />
            <Route path="/music" element={<Music />} />
            <Route path="/news" element={<News />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;

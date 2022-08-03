import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import store from "./redux/state";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";


let rerenderEntireTree = () => {
 
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
       <BrowserRouter>
      <App store={store.getState()} addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)} />
   {/* {/*    // store={store._state} */}
      
       
        </BrowserRouter>
    </React.StrictMode>
  );
 }
rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




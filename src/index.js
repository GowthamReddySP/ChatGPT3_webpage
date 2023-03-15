import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './index.css'
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
//Applications built with just React usually have a single root DOM node. If you are integrating React into an existing app, you may have as many isolated root DOM nodes as you like.
//To render a React element, first pass the DOM element to ReactDOM.createRoot(), then pass the React element to root.render():
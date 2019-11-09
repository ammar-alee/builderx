import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./icons.js";
import Explore from "./screens/Explore";
import Home from "./screens/Home";
import Notifications from "./screens/Notifications";
import Popular from "./screens/Popular";
import Post from "./screens/Post";
import "./style.css";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Explore} />
      <Route path="/Explore/" exact component={Explore} />
      <Route path="/Home/" exact component={Home} />
      <Route path="/Notifications/" exact component={Notifications} />
      <Route path="/Popular/" exact component={Popular} />
      <Route path="/Post/" exact component={Post} />
    </Router>
  );
}

export default App;

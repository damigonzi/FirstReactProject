import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Switch} from "react-router-dom";


import PlayerLogin from "./components/Login";
import Game from "./components/tictactoe";

class App extends Component {

  render() {
    return (
    <Router>
      <Routes>
        <Route exact path='/' element={< PlayerLogin />}></Route>
        <Route exact path='/tictactoe' element={< Game />}></Route>
      </Routes>
    </Router>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);

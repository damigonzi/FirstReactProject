import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import PlayerName from "./components/login";
import Game from "./components/tictactoe";


class App extends Component {
  render() {
    return (
    <Router>
      <Routes>
        <Route exact path='/' element={< PlayerName />}></Route>
        <Route exact path='/login' element={< PlayerName />}></Route>
        <Route exact path='/tictactoe' element={< Game />}></Route>
      </Routes>
    </Router>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
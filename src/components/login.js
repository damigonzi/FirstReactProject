import React from 'react';
import { Route, Navigate, Link, useNavigate } from "react-router-dom";
import { TextField, Button } from '@mui/material';

import './Login.css';

export default function Login() {

  const navigate = useNavigate();
  const handleSubmit = event => {
    event.preventDefault();
    const Nickname = document.getElementById('outlined-basic').value;
    console.log(Nickname)
    navigate('/tictactoe');
  };

  return(
    <div className="login-window">
      <h1>Please Log In</h1>
      <form onSubmit={ handleSubmit}>
        <label>
          <p>Username</p>
          <TextField id="outlined-basic" label="Name" variant="outlined"/>
        </label>
        <div>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  )
}

import React from 'react';
import './login.css';
import { TextField,Button,styled } from '@mui/material';
import {Link } from "react-router-dom";
import {Route, Navigate } from 'react-router-dom';

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'purple',
  },
  '&.Mui-focused fieldset': {
    color: '#ddd',
    borderColor: 'purple',
  },
  '& .MuiOutlinedInput-root': {
    '& label':{
      color: '#ddd',
    },
    '& fieldset': {
      borderColor: 'purple',
    },
    '&:hover fieldset': {
      borderColor: '#5c1d5c',
      borderWidth: 3,
    },
  },
});

class PlayerName extends React.Component {
  handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      <Route path='/login' element={ <Navigate replace to="/tictactoe" /> }/>
    }
  }

  render() {
    return (
      <div className='login-window'>
        <h1>Please enter your name</h1>
        <div>
          <CssTextField inputProps={{ style: { color: "#ddd" }}}
            id="outlined-basic" label="Name" variant="outlined"
            onKeyPress={this.handleKeyPress}

          />
        </div>
        <div className='btn'>
          <Link to="/tictactoe">
            <Button variant="contained" >
              enter 
            </Button>
          </Link>
        </div>
      </div>
    )
  }
}

export default PlayerName;
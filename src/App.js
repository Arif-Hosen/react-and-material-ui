import logo from './logo.svg';
import './App.css';
import { Button, Dialog, Rating, DatePicker, TextField } from '@mui/material';
import { useState } from 'react';
import Newspaper from './component/Newspaper/Newspaper';

function App() {
  const [value, setValue] = useState(2);
  return (
    <div className="App">
      <Button variant="contained">My Button</Button>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <Rating name="read-only" value={5} readOnly />
      <Newspaper></Newspaper>

    </div>
  );
}

export default App;

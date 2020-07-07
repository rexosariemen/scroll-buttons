import React from 'react';
import { render } from 'react-dom';
import NavBar from './NavBar'

const App = () => {
  return (
    <React.StrictMode>
      <h3>Horizontal Scrolling Buttons using React Refs</h3>
      <NavBar />
    </React.StrictMode>
  );
};

render(<App />, document.getElementById('root'));
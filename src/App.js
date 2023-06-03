import React from 'react';
import Header from './components/Header.jsx';
import { Outlet } from 'react-router-dom';
import './components/Header.css'

function App() {
  return (
    <div>
      <Header />
      <div className='outlet'>
        <Outlet />
      </div>
    </div>
  );
}

export default App;

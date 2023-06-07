import React from 'react';
import Header from './components/Header.jsx';
import { Outlet } from 'react-router-dom';
import './components/Header.css'
import toast, { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Toaster/>
    <div>
      <Header />
      <div className='outlet'>
        <Outlet />
      </div>
      </div>
    </>
  );
}

export default App;

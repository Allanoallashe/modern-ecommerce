import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import Home from './components/pages/Home'
import Menu from './components/pages/Menu'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Login from './components/pages/Login'
import New from './components/pages/New'
import SignUp from './components/pages/SignUp'
import { store } from './redux'
import { Provider } from 'react-redux';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Home />} />
      <Route path='Menu/:filterby' element={<Menu/>}/>
      <Route path='About' element={<About/>}/>
      <Route path='Contact' element={<Contact/>}/>
      <Route path='Login' element={<Login/>}/>
      <Route path='New' element={<New />} />
      <Route path='SignUp' element={<SignUp />} />
    </Route>
  )
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);


import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "./Components/Home/Navbar";
import Quote from './Components/Home/Quote';
import Home from './Components/Home/Home';
import Images from './Components/Images/Images';
import Items from './Components/Items/Items';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Quote />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/images' element={<Images />} />
          <Route exact path='/itemsbox' element={<Items />} />
          <Route exact path='/Login' element={<Login />} />
          <Route exact path='/SignUp' element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
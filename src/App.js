import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Quote from './Components/Home/Quote';
import Home from './Components/Home/Home';
import Images from './Components/Images/Images';
import ImagesFootwear from './Components/ImagesFootwear/ImagesFootwear';
import Items from './Components/Items/Items';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Ngo from './Components/Ngo/Ngo';
// import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Quote />
        <Routes>
          {/* <Route exact path='/' element={<Dashboard />} /> */}
          <Route exact path='/' element={<Home />} />
          <Route exact path='/images' element={<Images />} />
          <Route exact path='/imagesfootwear' element={<ImagesFootwear />} />
          <Route exact path='/itemsbox' element={<Items />} />
          <Route exact path='/Login' element={<Login />} />
          <Route exact path='/SignUp' element={<SignUp />} />
          <Route exact path='/Ngo' element={<Ngo />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
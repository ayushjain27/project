import './App.css';
import React, { useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Navbar from './Components/Navbar/Navbar';
// import Alert from './Components/Alert/Alert';
// import Quote from './Components/Home/Quote';
import Home from './Components/Home/Home';
import Images from './Components/Images/Images';
import ImagesFootwear from './Components/ImagesFootwear/ImagesFootwear';
import Items from './Components/Items/Items';
import Login from './Components/Login/Login';
import NgoLogin from './Components/NgoLogin/NgoLogin';
import SignUp from './Components/SignUp/SignUp';
import NgoSignUp from './Components/NgoSignUp/NgoSignUp';
import Ngo from './Components/Ngo/Ngo';
import Cate from './Components/Cate/Cate'
// import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        {/* <Alert alert={alert} style={{backgroundColor:'black'}}/> */}
        {/* <Quote /> */}
        <Routes>
          {/* <Route exact path='/' element={<Dashboard />} /> */}
          <Route exact path='/' element={<Home />} />
          <Route exact path='/images' element={<Images showAlert={showAlert}/>} />
          <Route exact path='/imagesfootwear' element={<ImagesFootwear showAlert={showAlert}/>} />
          <Route exact path='/itemsbox' element={<Items showAlert={showAlert}/>} />
          <Route exact path='/Login' element={<Login showAlert={showAlert}/>} />
          <Route exact path='/NgoLogin' element={<NgoLogin showAlert={showAlert}/>} />
          <Route exact path='/SignUp' element={<SignUp showAlert={showAlert}/>} />
          <Route exact path='/NgoSignUp' element={<NgoSignUp showAlert={showAlert}/>} />
          <Route exact path='/Ngo' element={<Ngo showAlert={showAlert}/>} />
          <Route exact path='/cate' element={<Cate/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
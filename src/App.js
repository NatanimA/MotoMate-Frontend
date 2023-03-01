
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import MainPage from './Components/Navbar/Mainpage';
import {
  BrowserRouter as Router,
  Routes, Route,

} from 'react-router-dom';
import Reservation from './Components/Navbar/Reservation';
import Details from './Components/Details';
import AddItem from './Components/AddItem';

import './index.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/details" element={<Details />} />
        <Route path="/additem" element={<AddItem />} />
      </Routes>
    </Router>
  );
};

export default App;

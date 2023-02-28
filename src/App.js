import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import MainPage from './Components/Navbar/Mainpage';
import {
  BrowserRouter as Router,
  Routes, Route,

} from 'react-router-dom';
import Reservation from './Components/Navbar/Reservation';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/reservation" element={<Reservation />} />
      </Routes>
    </Router>

  )
  }

export default App;

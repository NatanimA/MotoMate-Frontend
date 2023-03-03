
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import MainPage from './Components/Navbar/Mainpage';
import {
  BrowserRouter as Router,
  Routes, Route,

} from 'react-router-dom';
import Reservation from './Components/Navbar/Reservation';
import MyReservation from './Components/Navbar/MyReservations';
import Details from './Components/Details';
import AddItem from './Components/AddItem';
import Signin from './Components/Signin';
import Signup from './Components/Signup';

import './index.css';
import { cars } from './Components/Navbar/Carousel';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/my-reservations" element={<MyReservation />} />
    
        {cars.map((car) => (
          <Route
            key={car.id}
            path={`/cars/${car.id}`}
            element={<Details car={car} />}
            />
          ))}
        <Route path="/additem" element={<AddItem />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;


import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import MainPage from './Components/Navbar/Mainpage';
import {
  BrowserRouter as Router,
  Routes, Route,

} from 'react-router-dom';
import Reservation from './Components/Navbar/Reservation';
import Details from './Components/Details';
import './index.css';
import { cars } from './Components/Navbar/Carousel';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/reservation" element={<Reservation />} />
        {cars.map((car) => (
          <Route
            key={car.id}
            path={`/cars/${car.id}`}
            element={<Details car={car} />}
            />
          ))}
      </Routes>
    </Router>
  );
};

export default App;

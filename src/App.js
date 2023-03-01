import React from "react";
import './index.css';
import Navbar from "./Components/Navbar/Navbar";
import MainPage from "./Components/Navbar/Mainpage";
import Reservation from "./Components/Navbar/Reservation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<MainPage />} />
        <Route path="/reservation" exact element={<Reservation />} />
      </Routes>
    </Router>
  );
};

export default App;

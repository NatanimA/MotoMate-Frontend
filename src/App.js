import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import MainPage from './Components/Mainpage';
import ReservationsPage from "./Components/Reservations"


function App() {
  return (
    <div>
      <Navbar />
      <MainPage />
      <ReservationsPage />
    </div>
  );
}

export default App;

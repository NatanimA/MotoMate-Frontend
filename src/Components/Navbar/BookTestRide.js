import React from "react";

const BookTestRide = () => {
  return (
    <div className="reservations">
      <div className="bg-img"></div>
      <div className="top-head">BOOK A TEST RIDE</div>
      <div className="bot-head"> <br />
        Here are the current available models BMW X1 xDrive28i BMW 330i xDrive
        Sedan BMW M340i xDrive Sedan BMW 330e xDrive Sedan BMW 330i Sedan BMW
        M340i Sedan BMW 330e Sedan BMW 530i xDrive Sedan BMW 530e xDrive Sedan
        BMW 540i xDrive Sedan BMW M550i xDrive Sedan BMW 530i Sedan BMW 530e
        Sedan BMW 540i Sedan BMW 740i xDrive Sedan BMW 745e xDrive BMW 750i
        xDrive Sedan BMW M760i xDrive Sedan ALPINA B7 xDrive BMW 740i Sedan BMW
        M3 Coupe BMW M3 Competition Coupe BMW M4 Coupe BMW M4 Competition Coupe
        BMW M4 Competition Convertible BMW M5 Sedan BMW M8 Competition Coupe BMW
        M8 Competition Gran Coupe BMW M8 Competition Convertible BMW X1
        sDrive28i.
      </div>
      <div className="location">
      <form action="/action_page.php">
        <input
          className="loc-input"
          type="text"
          id="location"
          name="location"
          placeholder="Location..."
        ></input>
         <input type="submit" value="Book Now!" className="book-now"></input>
         </form>
      </div>
    </div>
  );
};

export default BookTestRide;

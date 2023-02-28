import React from "react";
import { LoremIpsum } from "react-lorem-ipsum";

const ReservationsPage = () => {
  return (
    <>
      <div className="reservation-page">
        <LoremIpsum p={1} />
      </div>
      <div className="location">
        <input
          type="text"
          id="location"
          name="location"
          placeholder="Location"
        ></input>
        
        <input type="submit" value="Book Now"></input>
      </div>
    </>
  );
};

export default ReservationsPage;

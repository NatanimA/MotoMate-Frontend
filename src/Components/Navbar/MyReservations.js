import React from "react";

const MyReservation = () => {
  return (
    <div className="my-reservations">
      <div className="res-top-head">My Reservation</div>
      <div className="card">
      <img src="https://images.unsplash.com/photo-1617531653332-bd46c24f2068?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=915&q=80" className="res-card-img"></img>
      <div className="container">
       <h4><b>BMW 3 Series</b></h4> 
      <p>The BMW 3 Series is a compact executive car manufactured by the German automaker BMW since May 1975.</p>
        <a href="#" className="btn-res-delete">
          Delete
        </a>
      </div>
      </div>
      </div>
  );
};

export default MyReservation;

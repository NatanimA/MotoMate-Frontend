import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const MyReservation = () => {
  return (
    <div className="my-reservations">
      <div className="res-top-head">My Reservation</div>
      <div className="card-layout">
      <div className="card">
        <div className="card-body">
          <img
            src="https://images.unsplash.com/photo-1617531653332-bd46c24f2068?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=915&q=80"
            className="card-img-top"
          />
          <br />
          <h5 className="card-title">BMW 3 Series</h5>
          <p className="card-text">
            The BMW 3 Series is a compact executive car manufactured by the
            German automaker BMW since May 1975.
          </p>
          <a href="#" className="btn btn-primary">
            Delete Reservations
          </a>
        </div>
      </div>
    </div>

     <div className="card">
    <div className="card-body">
  <img
    src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    className="card-img-top"
  />
  <br />
  <h5 className="card-title">Mercedez Benz C Class</h5>
  <p className="card-text">
  The Mercedes-Benz C-Class is a line of compact executive cars produced by Daimler AG.
  Introduced in 1993 as a replacement for the 190 (W201) range.
  </p>
  <a href="#" className="btn btn-primary">
    Delete Reservations
  </a>
</div>
</div>
</div>
  );
};

export default MyReservation;

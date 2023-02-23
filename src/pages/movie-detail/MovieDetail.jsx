import React from "react";
import Detail from "./components/detail/Detail";
import Showtime from "./components/showtimes/Showtime";

export default function MovieDetail() {
  return (
    <div className="py-5">
      <div className="container">
        <div className="row">
          <Detail />
          <Showtime />
        </div>
      </div>
    </div>
  );
}

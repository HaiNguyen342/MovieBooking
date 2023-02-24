import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchTicketDetailApi } from "../../services/ticket";
import Seat from "./components/Seat";

export default function Booking() {
  const [ticketDetail, setTicketDetail] = useState({});

  const params = useParams();

  useEffect(() => {
    getTicketDetail();
  }, []);

  const getTicketDetail = async () => {
    const result = await fetchTicketDetailApi(params.id);

    setTicketDetail(result.data.content);
  };

  const renderSeats = () => {
    return ticketDetail?.danhSachGhe?.map((ele, idx) => {
      return (
        <React.Fragment key={ele.maGhe}>
          <Seat ele={ele} />
          {(idx + 1) % 16 === 0 && <br />}
        </React.Fragment>
      );
    });
  };

  return (
    <div className="py-5">
      <div className="row">
        <div className="col-8 mb-4">
          <div style={{ width: "95%" }} className="mx-auto">
            <div className="mr-1 mb-1 d-inline-block p-2 rounded text-white bg-secondary">
              Seats are booked
            </div>
            <div className="mr-1 mb-1 d-inline-block p-2 rounded text-white bg-dark">
              Seats not booked
            </div>
            <div className="mr-1 mb-1 d-inline-block p-2 rounded text-white bg-primary">
              Seats are being booked
            </div>
            <div className="mr-1 mb-1 d-inline-block p-2 rounded text-white bg-warning">
              VIP seats
            </div>
          </div>
        </div>
        <div className="col-8">
          <div style={{ width: "95%" }} className="mx-auto">
            {renderSeats()}
          </div>
        </div>
        <div className="col-4">
          <img
            style={{ width: 300, height: 400, objectFit: "cover" }}
            src={ticketDetail?.thongTinPhim?.hinhAnh}
            alt="#"
          />
          <h4 className="mb-0">{ticketDetail?.thongTinPhim?.tenPhim}</h4>
          <h5 className="mb-0">
            Number of seats:
            <div className="d-flex">
              <p className="badge badge-success mr-2 mb-0">13</p>
              <p className="badge badge-success mr-2 mb-0">14</p>
            </div>
          </h5>
          <h5>Total: 40000</h5>
          <button className="btn btn-warning">BOOK</button>
        </div>
      </div>
    </div>
  );
}

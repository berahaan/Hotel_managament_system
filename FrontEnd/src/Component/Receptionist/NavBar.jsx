import React from "react";
import { Outlet, Link } from "react-router-dom";

const ReceptionistPage = () => {
  return (
    <div>
      <nav className="bg-gradient-to-r from-blue-500 to-teal-500 text-white p-4 fixed w-full top-0 shadow-lg z-10">
        <ul className="flex space-x-4">
          <li>
            <Link to="home">Home</Link>
          </li>
          <li>
            <Link to="reservationForm">ReservationForm</Link>
          </li>
          <li>
            <Link to="ReservedRoomList">Reservation list </Link>
          </li>
          <li>
            <Link to="roomlist">Room List </Link>
          </li>
          <li>
            <Link to="/">BackHome </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};
export default ReceptionistPage;

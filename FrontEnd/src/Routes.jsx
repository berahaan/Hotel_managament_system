import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Login from "../src/Component/Login/LoginPage";
import Employelist from "../src/Component/HR/EmployeList";
import Vacancy from "../src/Component/HR/Vacancy";
import Hire from "../src/Component/HR/Hire";
import Addrom from "../src/Component/Managers/AddRoom";
import ReservationList from "../src/Component/Managers/ReservationList";
import Feedback from "../src/Component/Managers/Feedback";
import Home from "../src/Component/Receptionist/Home";
import Navbar from "../src/Component/Receptionist/NavBar";
import ReservationForm from "../src/Component/Receptionist/ReservationForm";
import ReservedRoomList from "../src/Component/Receptionist/ReservedRoomList";

function RouterPage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* this below is for HR */}
        <Route path="/employelist" element={<Employelist />} />
        <Route path="/hire" element={<Hire />} />
        <Route path="/vacancy" element={<Vacancy />} />
        {/* this below ones is for managers  */}
        <Route path="/addrom" element={<Addrom />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/reservationlist" element={<ReservationList />} />
        {/* this below ones for Receptionist */}
        <Route path="/home" element={<Home />} />
        <Route path="/reservationForm" element={<ReservationForm />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/reservedroomlist" element={<ReservedRoomList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouterPage;

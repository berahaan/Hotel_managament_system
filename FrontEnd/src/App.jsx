import React, { createContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Login from "./Component/Login/LoginPage";
import { UserProvider } from "./Component/Login/UserContext";
import Employelist from "./Component/HR/EmployeList";
import Hire from "./Component/HR/Hire";
import Vacancy from "./Component/HR/Vacancy";
import Hrhome from "./Component/HR/Hrhome";
import Hm from "./Component/HR/Hm";
import Addrom from "./Component/Managers/AddRoom";
import ManagerHome from "./Component/Managers/Home";
import ReservationList from "./Component/Managers/ReservationList";
import Feedback from "./Component/Managers/Feedback";
import ReceptionistHome from "./Component/Receptionist/Home";
import ReservationForm from "./Component/Receptionist/ReservationForm";
import ReservedRoomList from "./Component/Receptionist/ReservedRoomList";
import RoomList from "./Component/Receptionist/roomlist";
import GuestFeedback from "./Component/Guest/GuestFeedback";
import GuestHome from "./Component/Guest/GuestHome";
import GuestList from "./Component/Managers/Guest";
import Service from "./Component/Guest/Service";
import HomeAll from "./Component/HomeAll";
import VacancyList from "./Component/HR/VacancyList";
import Test3 from "./Component/Test3";
import RegistrationForm from "./Component/Login/RegistratioForm";
import InternLogin from "./Component/Login/InternLogin";
import Practice from "./Component/Reactpractice/Practice";
function App() {
  const obj = ["toyota", "isuxu", "FSR"];
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomeAll />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/loginto" element={<InternLogin />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/vacancy" element={<VacancyList />} />
          <Route path="guestFeedback" element={<GuestFeedback />} />
          <Route path="guestservices" element={<Service />} />
          <Route path="/receptionist/*" element={<ReceptionistHome />}>
            <Route index element={<Navigate to="/receptionist" replace />} />
            <Route path="reservationForm" element={<ReservationForm />} />
            <Route path="roomlist" element={<RoomList />} />
            <Route path="ReservedRoomList" element={<ReservedRoomList />} />
          </Route>
          <Route path="/manager/*" element={<ManagerHome />}>
            <Route index element={<Navigate to="ManagerHome" replace />} />
            <Route path="reservation-list" element={<ReservationList />} />
            <Route path="feedback" element={<Feedback />} />
            <Route path="guestlist" element={<GuestList />} />
            <Route path="add-room" element={<Addrom />} />
          </Route>
          <Route path="/hr/*" element={<Hrhome />}>
            <Route index element={<Navigate to="harme" replace />} />
            <Route path="harme" element={<Hm />} />
            <Route path="hire" element={<Hire />} />
            <Route path="employelist" element={<Employelist />} />
            <Route path="vacancy" element={<Vacancy />} />
          </Route>
          <Route path="/guest/*" element={<GuestHome />}>
            <Route index element={<Navigate to="GuestHome" replace />} />
          </Route>
          <Route path="*" element={<Test3 />}></Route>
        </Routes>
      </Router>
    </UserProvider>
  );
}
export default App;

import React from "react";
import { Outlet, Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-gradient-to-r from-blue-500 to-teal-500 text-white p-4 fixed w-full top-0 shadow-lg z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">Profile</div>
          <ul className="flex space-x-6">
            <li>
              <Link to="reservation-list" className="hover:text-gray-200">
                Reservation List
              </Link>
            </li>
            <li>
              <Link to="guestlist" className="hover:text-gray-200">
                GuestList
              </Link>
            </li>
            <li>
              <Link to="feedback" className="hover:text-gray-200">
                Feedback
              </Link>
            </li>
            <li>
              <Link to="add-room" className="hover:text-gray-200">
                Add Room
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-gray-200">
                BackHome
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container mx-auto pt-24 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;

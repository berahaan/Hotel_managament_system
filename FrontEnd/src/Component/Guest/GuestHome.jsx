import React from "react";
import { Outlet, Link } from "react-router-dom";
import ReservationDetails from "./reservationdetail";

function Home() {
  return (
    <>
      <nav className="text-white p-4 fixed w-full top-0 shadow-lg z-10 bg-black">
        <ul className="flex space-x-4 justify-center">
          <li>
            <Link to="/" className="hover:text-gray-400">
              BackHome
            </Link>
          </li>
        </ul>
      </nav>
      <div className="pt-16">
        <h3 className="text-3xl mt-8 text-center font-bold text-blue-600">
          Welcome to Sheraton Hotels 😂😂😁
        </h3>
        <div className="container mx-auto p-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
              Your Information
            </h2>
            <ReservationDetails />
          </div>
        </div>
        <footer className="bg-gray-800 text-gray-300 py-8 mt-8">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 Hotel Name. All rights reserved.</p>
            <div className="mt-4 space-x-4">
              <a href="/privacy" className="hover:text-white">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-white">
                Terms of Service
              </a>
            </div>
            <div className="mt-4">
              <p>123 Hotel Street, City, Country</p>
              <p>Email: info@hotel.com | Phone: (123) 456-7890</p>
            </div>
            <div className="mt-4 space-x-4">
              <a href="#" className="hover:text-white">
                Facebook
              </a>
              <a href="#" className="hover:text-white">
                Twitter
              </a>
              <a href="#" className="hover:text-white">
                Instagram
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Home;

import React from "react";
import background from "./Images/hotelbg.webp";
import { Link } from "react-router-dom";

function HomeAll() {
  return (
    <>
      <div
        className="min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${background})` }}
      >
        <nav className="bg-gray-800 p-4 fixed top-0 w-full z-10">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-white font-semibold text-2xl">
              Koye Feche Hotel
            </div>
            <div className="space-x-4">
              <Link to="/" className="text-gray-300 hover:text-white text-xl">
                Home
              </Link>
              <Link
                to="guestservices"
                className="text-gray-300 hover:text-white text-xl"
              >
                Service
              </Link>
              <Link
                to="vacancy"
                className="text-gray-300 hover:text-white text-xl"
              >
                Vacancy
              </Link>
              <Link
                to="guestFeedback"
                className="text-gray-300 hover:text-white text-xl"
              >
                Feedback
              </Link>
              <Link
                to="/loginto"
                className="text-gray-300 hover:text-white text-xl"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="text-gray-300 hover:text-white text-xl"
              >
                sign-up
              </Link>
            </div>
          </div>
        </nav>
        <div className="container mx-auto text-center py-20 mt-16">
          <h1 className="text-5xl text-white font-bold">
            WELCOME TO YOUR HOTEL
          </h1>
          <p className="text-3xl text-gray-200 mt-20 text-center ">
            WE VALUE YOUR STAYING AT HERE !!
          </p>
        </div>
      </div>
      <footer className="bg-gray-800 text-gray-300 py-8 ">
        <div className="container mx-auto text-center flex justify-between items-center">
          <p>&copy; 2024 koye fiche Hotel. All rights reserved.</p>
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
            <p>Email: info@hotel.com | Phone: 0947363764</p>
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
    </>
  );
}
export default HomeAll;

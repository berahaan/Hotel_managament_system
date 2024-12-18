import React from "react";
import { Outlet, Link } from "react-router-dom";

function Home() {
  return (
    <>
      <nav className="bg-gradient-to-r from-purple-700 to-blue-500 h-16 shadow-lg fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto px-6 flex justify-between items-center h-full">
          {/* Logo Section */}
          <div className="text-2xl font-bold text-white">
            <Link to="/">HR Management</Link>
          </div>

          {/* Links Section */}
          <ul className="flex space-x-8 items-center text-white text-lg">
            <li className="hover:text-gray-300 transition">
              <Link to="/hr/harme">Home</Link>
            </li>

            {/* Dropdown Menu */}
            <li className="relative group">
              <Link
                to="/forPhoto"
                className="hover:text-gray-300 transition flex items-center"
              >
                Employee Management
                <span className="ml-2">&#9662;</span>
              </Link>
              <ul className="absolute left-0 hidden group-hover:block bg-white text-gray-800 rounded-lg shadow-lg overflow-hidden">
                <li className="hover:bg-gray-100 px-4 py-2">
                  <Link to="/hr/employelist">Employee List</Link>
                </li>
                <li className="hover:bg-gray-100 px-4 py-2">
                  <Link to="/hr/hire">Hire Employee</Link>
                </li>
              </ul>
            </li>

            <li className="hover:text-gray-300 transition">
              <Link to="/hr/vacancy">Vacancy</Link>
            </li>

            <li className="hover:text-gray-300 transition">
              <Link to="/">Back Home</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Content Section */}
      <div className=" mx-auto ">
        <Outlet />
      </div>
    </>
  );
}

export default Home;

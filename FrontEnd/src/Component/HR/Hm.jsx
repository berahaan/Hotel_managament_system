import React from "react";
import { Link } from "react-router-dom";

function Hm() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-blue-900 to-gray-900 flex flex-col justify-center items-center text-white text-center px-4">
      {/* Main Heading */}
      <h1 className="text-5xl font-bold mb-6">Welcome to the HR Portal</h1>

      {/* Subheading */}
      <h2 className="text-3xl mb-4">Empowering Careers in Hotel Management</h2>

      {/* Description */}
      <p className="text-lg mb-8 leading-relaxed max-w-4xl">
        The HR portal for hotel management focuses on hiring, training, and
        retaining top talent in the hospitality industry. Whether you're
        managing employee information, recruiting for key roles, or posting job
        vacancies, we offer the tools and resources to support your HR needs.
      </p>

      {/* Buttons */}
      <div className="flex space-x-4">
        <Link
          to="/hr/employelist"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded"
        >
          Employee Management
        </Link>
        <Link
          to="/hr/vacancy"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded"
        >
          View Vacancies
        </Link>
      </div>
    </div>
  );
}

export default Hm;

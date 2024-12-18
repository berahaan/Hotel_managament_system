import React, { useEffect, useState } from "react";
import axios from "axios";

const ForPhoto = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get("http://localhost:8000/employelist");
        setEmployees(response.data);
        console.log("Fetched data in the front end:", response.data);
      } catch (error) {
        console.log("Error fetching employee data:", error);
      }
    };
    fetchEmployees();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 mt-8">
      {/* Page Heading */}
      <h1 className="text-4xl font-bold text-center mb-4 text-blue-800">
        Employee Management Portal
      </h1>
      <p className="text-lg text-gray-700 text-center mb-8 max-w-6xl mx-auto">
        Welcome to the Employee Management Portal. Here, you can view all the
        employees currently working in the hotel management team, including
        their roles, salaries, and emergency contacts. Managing talent has never
        been easier!
      </p>

      {/* Table Heading */}
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Employee List</h2>

      {/* Table */}
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="w-full table-auto border-collapse border border-gray-300 text-left">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="px-6 py-3 border border-gray-300">#</th>
              <th className="px-6 py-3 border border-gray-300">First Name</th>
              <th className="px-6 py-3 border border-gray-300">Last Name</th>
              <th className="px-6 py-3 border border-gray-300">Role</th>
              <th className="px-6 py-3 border border-gray-300">Salary</th>
              <th className="px-6 py-3 border border-gray-300">
                Emergency Contact
              </th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr
                key={employee.e_id}
                className={`hover:bg-blue-100 ${
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                }`}
              >
                <td className="px-6 py-4 border border-gray-300">
                  {index + 1}
                </td>
                <td className="px-6 py-4 border border-gray-300">
                  {employee.firstName}
                </td>
                <td className="px-6 py-4 border border-gray-300">
                  {employee.lastName}
                </td>
                <td className="px-6 py-4 border border-gray-300">
                  {employee.e_role}
                </td>
                <td className="px-6 py-4 border border-gray-300">
                  {employee.salary} birr
                </td>
                <td className="px-6 py-4 border border-gray-300">
                  {employee.emergencyContact}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer Text */}
      <div className="mt-8 text-gray-700 text-center">
        <p>
          Need to add, update, or remove employees? Visit the{" "}
          <span className="text-blue-600 font-semibold">
            Employee Management
          </span>{" "}
          section for more options.
        </p>
      </div>
    </div>
  );
};

export default ForPhoto;

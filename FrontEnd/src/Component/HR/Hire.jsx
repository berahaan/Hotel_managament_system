import React, { useState } from "react";
import axios from "axios";

export default function EmployeeForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    e_role: "",
    department: "",
    email: "",
    startDate: "",
    salary: "",
    phoneNumber: "",
    e_address: "",
    birthday: "",
    gender: "",
    bank: "",
    emergencyContact: "",
  });

  const [showFormSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let isValid = true;
    const nameRegex = /^[A-Za-z]+$/;
    const phoneRegex = /^[0-9]+$/;

    // Validation checks
    if (!formData.firstName.match(nameRegex)) {
      alert("Please enter a valid first name");
      isValid = false;
    }
    if (!formData.lastName.match(nameRegex)) {
      alert("Please enter a valid last name");
      isValid = false;
    }
    if (!formData.department.match(nameRegex)) {
      alert("Please enter a valid department name");
      isValid = false;
    }
    if (!formData.phoneNumber.match(phoneRegex)) {
      alert("Please enter a valid phone number");
      isValid = false;
    }
    if (!formData.emergencyContact.match(phoneRegex)) {
      alert("Please enter a valid emergency contact number");
      isValid = false;
    }

    if (isValid) {
      try {
        const phoneResponse = await axios.post(
          "http://localhost:8000/phone_number",
          {
            phone_number: formData.phoneNumber,
          }
        );
        const phoneId = phoneResponse.data.phone_id;

        // Step 2: Insert email into email table
        const emailResponse = await axios.post("http://localhost:8000/email", {
          email: formData.email,
        });
        const emailId = emailResponse.data.email_id; // Corrected from phoneResponse.data.email_id

        // Step 3: Insert employee details into employee table
        const employeeResponse = await axios.post(
          "http://localhost:8000/addEmployee",
          {
            ...formData,
            phone_id: phoneId,
            email_id: emailId,
          }
        );

        console.log("Employee added successfully:", employeeResponse.data);
        setFormSubmitted(true);
        // Clear form data after successful submission
        setFormData({
          firstName: "",
          lastName: "",
          e_role: "",
          department: "",
          email: "",
          startDate: "",
          salary: "",
          phoneNumber: "",
          e_address: "",
          birthday: "",
          gender: "",
          bank: "",
          emergencyContact: "",
        });
        alert("Employee hired successfully!");
      } catch (error) {
        if (error.response?.status === 408) {
          alert("Employee already exists");
        } else {
          alert("Error in sending data");
          console.log(error);
        }
      }
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-indigo-200 mt-16">
      <div className="w-full max-w-3xl p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Employee Registration
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Fill out the form below to hire a new employee. Please provide
          accurate information to ensure proper onboarding.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter first name"
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-300 outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter last name"
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-300 outline-none"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Role
            </label>
            <select
              name="e_role"
              value={formData.e_role}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-300 outline-none"
              required
            >
              <option value="" disabled>
                Select a role
              </option>
              <option value="chief">Chief</option>
              <option value="reception">Reception</option>
              <option value="waiters">Waiters</option>
              <option value="janitors">Janitors</option>
            </select>
          </div>

          {/* Contact Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Phone Number
              </label>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Enter phone number"
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-300 outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Emergency Contact
              </label>
              <input
                type="text"
                name="emergencyContact"
                value={formData.emergencyContact}
                onChange={handleChange}
                placeholder="Enter emergency contact"
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-300 outline-none"
                required
              />
            </div>
          </div>

          {/* Salary and Department */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Salary (in Birr)
              </label>
              <input
                type="number"
                name="salary"
                value={formData.salary}
                onChange={handleChange}
                placeholder="Enter salary amount"
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-300 outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Department
              </label>
              <input
                type="text"
                name="department"
                value={formData.department}
                onChange={handleChange}
                placeholder="Enter department"
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-300 outline-none"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email address"
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-300 outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Start Date
              </label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-300 outline-none"
                required
              />
            </div>
          </div>

          {/* Gender */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Gender
            </label>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === "male"}
                  onChange={handleChange}
                  className="form-radio text-blue-600"
                />
                Male
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === "female"}
                  onChange={handleChange}
                  className="form-radio text-blue-600"
                />
                Female
              </label>
            </div>
          </div>

          {/* Address */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Address
            </label>
            <input
              type="text"
              name="e_address"
              value={formData.e_address}
              onChange={handleChange}
              placeholder="Enter address"
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-300 outline-none"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Hire Employee
          </button>

          {/* Submission Success Message */}
          {showFormSubmitted && (
            <p className="mt-4 text-center text-green-600 font-semibold">
              Employee hired successfully!
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

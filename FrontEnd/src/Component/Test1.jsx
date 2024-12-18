import React, { useState } from "react";
import axios from "axios";

const ReservationForm = () => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [room_number, setRoomNumber] = useState("");
  const [check_in, setCheckIn] = useState("");
  const [check_out, setCheckOut] = useState("");
  const [payment, setPayment] = useState("");

  const handleReservation = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/reservation", {
        first_name,
        last_name,
        email,
        room_number,
        phone_number,
        check_in,
        check_out,
        payment,
      });
      alert("Reservation created successfully");
    } catch (error) {
      console.error("Error creating reservation:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white shadow-lg rounded">
      <h2 className="text-2xl font-bold mb-4">Create Reservation</h2>
      <form onSubmit={handleReservation}>
        <div className="mb-4">
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-700"
          >
            First Name
          </label>
          <input
            id="first_name"
            type="text"
            value={first_name}
            onChange={(e) => setFirstName(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-700"
          >
            Last Name
          </label>
          <input
            id="last_name"
            type="text"
            value={last_name}
            onChange={(e) => setLastName(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="room_number"
            className="block text-sm font-medium text-gray-700"
          >
            roomNumber
          </label>
          <input
            id="room_number"
            type="string"
            value={room_number}
            onChange={(e) => setRoomNumber(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number
          </label>
          <input
            id="phoneNumber"
            type="text"
            value={phone_number}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="checkIn"
            className="block text-sm font-medium text-gray-700"
          >
            Check-In
          </label>
          <input
            id="checkIn"
            type="date"
            value={check_in}
            onChange={(e) => setCheckIn(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="checkOut"
            className="block text-sm font-medium text-gray-700"
          >
            Check-Out
          </label>
          <input
            id="checkOut"
            type="date"
            value={check_out}
            onChange={(e) => setCheckOut(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="payment"
            className="block text-sm font-medium text-gray-700"
          >
            Payment
          </label>
          <input
            id="payment"
            type="text"
            value={payment}
            onChange={(e) => setPayment(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <button
          type="submit"
          className="inline-block bg-blue-500 text-white font-semibold p-2 rounded hover:bg-blue-700 mt-4"
        >
          Create Reservation
        </button>
      </form>
    </div>
  );
};

export default ReservationForm;

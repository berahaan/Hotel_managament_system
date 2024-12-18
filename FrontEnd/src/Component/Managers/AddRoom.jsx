import axios from "axios";
import React, { useState } from "react";

const AddRoomForm = () => {
  const [room_number, setRoomNumber] = useState("");
  const [room_type, setRoomType] = useState("");
  const [floor_number, setFloorNumber] = useState("");
  const [number_bed, setNumOfBeds] = useState("");
  const [accessibility, setAccessibility] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const roomData = {
      room_number,
      room_type,
      floor_number,
      number_bed,
      accessibility,
    };

    try {
      const response = await axios.post(
        "http://localhost:8000/addroom",
        roomData
      );
      console.log("Room added:", response.data);
      alert("Successfully added !!");
    } catch (error) {
      console.error("Error adding room:", error);
    }

    // setRoomNumber("");
    // setRoomType("");
    // setFloorNumber("");
    // setNumOfBeds("");
    // setAccessibility("");
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Add Room</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="roomNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Room Number
          </label>
          <input
            type="text"
            id="roomNumber"
            value={room_number}
            onChange={(e) => setRoomNumber(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="roomType"
            className="block text-sm font-medium text-gray-700"
          >
            Room Type
          </label>
          <select
            id="roomType"
            value={room_type}
            onChange={(e) => setRoomType(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value=""></option>
            <option value="receptionist">Vvip</option>
            <option value="hr">Vip</option>
            <option value="manager">Normal</option>
          </select>
          {/* <input
            type="text"
            id="roomType"
            value={room_type}
            onChange={(e) => setRoomType(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          /> */}
        </div>
        <div>
          <label
            htmlFor="floorNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Floor Number
          </label>
          <input
            type="integer"
            id="floorNumber"
            value={floor_number}
            onChange={(e) => setFloorNumber(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="numOfBeds"
            className="block text-sm font-medium text-gray-700"
          >
            Number of Beds
          </label>
          <input
            type="number"
            id="numOfBeds"
            value={number_bed}
            onChange={(e) => setNumOfBeds(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="accessibility"
            className="block text-sm font-medium text-gray-700"
          >
            Accessibility For disable
          </label>
          <input
            type="text"
            id="accessibility"
            value={accessibility}
            onChange={(e) => setAccessibility(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Add Room
        </button>
      </form>
    </div>
  );
};

export default AddRoomForm;

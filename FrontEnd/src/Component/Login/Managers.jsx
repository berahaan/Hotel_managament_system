import React, { useEffect, useState } from "react";

function ManageRooms() {
  const [rooms, setRooms] = useState([]);
  const [form, setForm] = useState({
    room_number: "",
    room_type: "",
    floor_number: "",
    bed_type: "",
    accessible_for_disability: false,
    reservation_details: "",
  });

  useEffect(() => {
    fetch("http://localhost:3001/rooms")
      .then((response) => response.json())
      .then((data) => setRooms(data))
      .catch((error) => console.error("Error fetching rooms:", error));
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/rooms", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then((response) => response.json())
      .then((data) => {
        setRooms([...rooms, data]);
        setForm({
          room_number: "",
          room_type: "",
          floor_number: "",
          bed_type: "",
          accessible_for_disability: false,
          reservation_details: "",
        });
      })
      .catch((error) => console.error("Error creating room:", error));
  };

  const handleDelete = (room_number) => {
    fetch(`http://localhost:3001/rooms/${room_number}`, {
      method: "DELETE",
    })
      .then(() => {
        setRooms(rooms.filter((room) => room.room_number !== room_number));
      })
      .catch((error) => console.error("Error deleting room:", error));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Manage Rooms</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-2">
          <label className="block">Room Number:</label>
          <input
            type="text"
            name="room_number"
            value={form.room_number}
            onChange={handleChange}
            className="border rounded p-1 w-full"
          />
        </div>
        <div className="mb-2">
          <label className="block">Room Type:</label>
          <input
            type="text"
            name="room_type"
            value={form.room_type}
            onChange={handleChange}
            className="border rounded p-1 w-full"
          />
        </div>
        <div className="mb-2">
          <label className="block">Floor Number:</label>
          <input
            type="number"
            name="floor_number"
            value={form.floor_number}
            onChange={handleChange}
            className="border rounded p-1 w-full"
          />
        </div>
        <div className="mb-2">
          <label className="block">Bed Type:</label>
          <input
            type="text"
            name="bed_type"
            value={form.bed_type}
            onChange={handleChange}
            className="border rounded p-1 w-full"
          />
        </div>
        <div className="mb-2">
          <label className="block">Accessible for Disability:</label>
          <input
            type="checkbox"
            name="accessible_for_disability"
            checked={form.accessible_for_disability}
            onChange={handleChange}
            className="border rounded p-1"
          />
        </div>
        <div className="mb-2">
          <label className="block">Reservation Details:</label>
          <textarea
            name="reservation_details"
            value={form.reservation_details}
            onChange={handleChange}
            className="border rounded p-1 w-full"
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white rounded p-2">
          Add Room
        </button>
      </form>

      <h2 className="text-xl font-bold mb-2">Rooms List</h2>
      <ul className="list-disc pl-5">
        {rooms.map((room) => (
          <li key={room.room_number} className="mb-2">
            <div className="text-lg font-semibold">{room.room_number}</div>
            <div className="text-gray-600">Type: {room.room_type}</div>
            <div className="text-gray-600">Floor: {room.floor_number}</div>
            <div className="text-gray-600">Bed: {room.bed_type}</div>
            <div className="text-gray-600">
              Accessible: {room.accessible_for_disability ? "Yes" : "No"}
            </div>
            <div className="text-gray-600">
              Details: {room.reservation_details}
            </div>
            <button
              onClick={() => handleDelete(room.room_number)}
              className="bg-red-500 text-white rounded p-1 mt-2"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ManageRooms;

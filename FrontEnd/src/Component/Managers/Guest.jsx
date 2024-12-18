import React, { useEffect, useState } from "react";
import axios from "axios";

const GuestList = () => {
  const [guests, setGuests] = useState([]);

  useEffect(() => {
    fetchGuests();
  }, []);

  const fetchGuests = async () => {
    try {
      const response = await axios.get("http://localhost:8000/guests");
      setGuests(response.data);
    } catch (error) {
      console.error("Error fetching guests:", error);
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-5">Here is a Guest List</h1>
      <div className="grid grid-cols-3 gap-4">
        {guests.map((guest) => (
          <div
            key={guest.guest_id}
            className="p-4 border border-gray-300 rounded-md"
          >
            <h2 className="text-xl font-semibold">
              {guest.first_name} {guest.last_name}
            </h2>
            <p>Email: {guest.email}</p>
            <p>Phone Number: {guest.phone_number}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuestList;

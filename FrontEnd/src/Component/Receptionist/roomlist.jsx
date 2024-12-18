import axios from "axios";
import React, { useEffect, useState } from "react";

const RoomList = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get("http://localhost:8000/rooms");
        setRooms(response.data);
      } catch (error) {
        console.error("Error fetching rooms data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto mt-10 p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Availables Room List
      </h2>
      {rooms.length > 0 ? (
        <ul className="space-y-4 grid grid-cols-3">
          {rooms.map((room, index) => (
            <li key={index} className="border p-4 rounded-md shadow-md ">
              <div>
                <strong>Room Number:</strong> {room.room_number}
              </div>
              <div>
                <strong>Room Type:</strong> {room.room_type}
              </div>
              <div>
                <strong>Floor Number:</strong> {room.floor_number}
              </div>
              <div>
                <strong>Number of Beds:</strong> {room.number_bed}
              </div>
              <div>
                <strong>Accessibility:</strong> {room.accessibility}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div>No rooms available</div>
      )}
    </div>
  );
};

export default RoomList;

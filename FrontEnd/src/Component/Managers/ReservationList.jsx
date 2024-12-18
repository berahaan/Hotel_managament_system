import axios from "axios";
import React, { useEffect, useState } from "react";

const GuestDetails = () => {
  const [reservationData, setReservationData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGuestData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/getReservation"
        );
        setReservationData(response.data);
        console.log(setReservationData);
      } catch (error) {
        console.error("Error fetching guest data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGuestData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container w-full mx-2">
      <h1 className="text-2xl bg-gradient-to-r from-blue-200 to-teal-500 p-4 rounded-md">
        This below is Feedback given by Our Respected Client
      </h1>
      <br />
      {reservationData.length > 0 ? (
        <ul className="border-t-2 border-green-500">
          {reservationData.map((item, index) => (
            <li key={index} className="border-b-2 border-green-500 p-4">
              <strong>First Name:</strong> {item.first_name} <br />
              <strong>Last Name:</strong> {item.last_name} <br />
              <strong>Check-in Date:</strong> {item.check_in} <br />
              <strong>Check-out Date:</strong> {item.check_out} <br />
              <strong>Payment Method:</strong> {item.payment} <br />
              <strong>Room Number:</strong> {item.room_number} <br />
            </li>
          ))}
        </ul>
      ) : (
        "No data available."
      )}
    </div>
  );
};

export default GuestDetails;

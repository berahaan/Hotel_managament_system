import React from "react";

function ReservationDetails() {
  return (
    <section className="bg-white p-6 rounded-lg shadow-lg mb-8">
      <h2 className="text-2xl font-semibold mb-4">Your Reservation</h2>
      <p>
        <strong>Check-in Date:</strong> [Check-in Date]
      </p>
      <p>
        <strong>Check-out Date:</strong> [Check-out Date]
      </p>
      <p>
        <strong>Room Type:</strong> [Room Type]
      </p>
      <p>
        <strong>Booking Status:</strong> [Booking Status]
      </p>
      <p>
        <strong>Room Number:</strong> [Room Number]
      </p>
    </section>
  );
}

export default ReservationDetails;

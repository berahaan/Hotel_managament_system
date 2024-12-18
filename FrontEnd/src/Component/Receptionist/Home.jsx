import React from "react";
import Navbar from "./NavBar";
import background from "../Images/receptionist.jpg";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div
        className="min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="mb-20 bg-opacity-5 p-6 rounded-lg shadow-lg text-center w-full mx-auto">
          <h1 className="text-4xl font-extrabold mb-4">
            Welcome to Koye Fitche Hotel
          </h1>
          <p className="text-lg font-bold ">
            Experience the best hospitality and comfort with our top-notch
            services and facilities. Enjoy luxurious rooms, exquisite dining,
            and exceptional service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

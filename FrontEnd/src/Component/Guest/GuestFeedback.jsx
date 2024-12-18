import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
function Feedback() {
  const [f_name, setName] = useState("");
  const [f_description, setDescription] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/feedbacksend", {
        f_name,
        f_description,
        rating,
      })
      .then((response) => {
        console.log(response.data);
        alert("Feedback submitted successfully");
        // Clear the form
        setName("");
        setDescription("");
        setRating("");
      })
      .catch((error) => {
        console.log("Error submitting feedback", error);
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h1 className="mt-6 text-center text-xl font-extrabold ">
            How was your stay in Our hotel ?
          </h1>
          <h1 className="mt-6 text-center text-xl ">
            please don't hesitate to comment it below we value your feedback to
            imporve our hotel
          </h1>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Feedback Form
          </h2>
          <Link to="/" className="text-gray-300 hover:text-white">
            Home
          </Link>
        </div>
        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-6 bg-white p-8 rounded-lg shadow-md"
        >
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="mb-4">
              <label className="block text-gray-700">Name:</label>
              <input
                type="text"
                value={f_name}
                onChange={(e) => setName(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Description:</label>
              <textarea
                value={f_description}
                onChange={(e) => setDescription(e.target.value)}
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Enter your feedback"
                rows="4"
                required
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Rating:</label>
              <select
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                required
              >
                <option value="" disabled>
                  Select a rating
                </option>
                <option value="Very Good">Very Good</option>
                <option value="Good">Good</option>
                <option value="Bad">Bad</option>
              </select>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <footer className="bg-gray-800 text-gray-300 py-8 mt-8 w-full">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Hotel Name. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
          </div>
          <div className="mt-4">
            <p>123 Hotel Street, City, Country</p>
            <p>Email: info@hotel.com | Phone: (123) 456-7890</p>
          </div>
          <div className="mt-4 space-x-4">
            <a href="#" className="hover:text-white">
              Facebook
            </a>
            <a href="#" className="hover:text-white">
              Twitter
            </a>
            <a href="#" className="hover:text-white">
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Feedback;

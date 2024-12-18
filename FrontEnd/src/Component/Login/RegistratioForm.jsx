import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function register() {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [u_password, setPassword] = useState("");
  const [u_role, setRole] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({
      username,
      email,
      u_password,
      u_role,
    });
    const register = {
      username,
      email,
      u_password,
      u_role,
    };
    const response = await axios.post(
      "http://localhost:8000/register",
      register
    );
    alert("user registerd successfully");
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-300">
      <div className="max-w-md w-full bg-gray-200 p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center mb-8">
          Register here {" "}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-lg font-bold mb-2"
              htmlFor="username"
            >
              User name
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-lg font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-lg font-bold mb-2"
              htmlFor="password"
            >
              Passwords
            </label>
            <input
              id="password"
              type="password"
              value={u_password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your passwords"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-lg font-bold mb-2"
              htmlFor="role"
            >
              Role
            </label>
            <select
              id="role"
              value={u_role}
              className="outline-none w-full  max-h-min "
              onChange={(e) => {
                setRole(e.target.value);
              }}
              required
            >
              <option></option>
              <option>hr</option>
              <option>Receptionist </option>
              <option>manager </option>
              <option>other</option>
            </select>
          </div>
          <div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 mx-20 rounded focus:outline-none focus:shadow-outline"
            >
              Register
            </button>
          </div>
          <div className="text-xl mt-6">
            or if u have already account
            <Link
              to="/loginto"
              className="px-2 text-green-400 hover:text-green-500"
            >
              Login
            </Link>
            here
          </div>
        </form>
      </div>
    </div>
  );
}

export default register;

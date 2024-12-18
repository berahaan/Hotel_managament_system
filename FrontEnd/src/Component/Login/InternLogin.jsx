import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
const Login = () => {
  const [username, setUsername] = useState("");
  const [u_password, setPassword] = useState("");
  const [u_role, setRole] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const registerData = {
        username,
        u_password,
        u_role,
      };
      const response = await axios.post(
        "http://localhost:8000/login",
        registerData
      );

      // Role-based redirection
      switch (u_role) {
        case "receptionist":
          navigate("/receptionist");
          break;
        case "hr":
          navigate("/hr");
          break;
        case "manager":
          navigate("/manager");
          break;
        case "other":
          navigate("/other");
        default:
          alert("not logged in !!");
          break;
      }
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
        console.error("Error logging in:", error.response.data.message);
      } else {
        alert("Login failed");
        console.error("Error logging in:", error);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center mb-8">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your username"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="u_password"
            >
              Password
            </label>
            <input
              id="u_password"
              type="password"
              value={u_password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="u_role"
            >
              Role
            </label>
            <select
              id="u_role"
              value={u_role}
              onChange={(e) => setRole(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value=""></option>
              <option value="receptionist">Receptionist</option>
              <option value="hr">hr</option>
              <option value="manager">Manager</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
          </div>
          <div className="text-xl mt-6">
            or if u haven't account please
            <Link
              to="/register"
              className="px-2 text-green-400 hover:text-green-500"
            >
              signup
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

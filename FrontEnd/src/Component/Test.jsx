import React, { useState } from "react";
import axios from "axios";

function EmployeeForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [e_role, setERole] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/employe", {
        firstName,
        lastName,
        e_role,
        phone_number,
        email,
      });
      console.log(response.data); // Log success message or handle response
    } catch (error) {
      console.error("Error creating employee:", error);
      // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Role"
        value={e_role}
        onChange={(e) => setERole(e.target.value)}
      />
      <input
        type="text"
        placeholder="Phone Number"
        value={phone_number}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Create Employee</button>
    </form>
  );
}

export default EmployeeForm;

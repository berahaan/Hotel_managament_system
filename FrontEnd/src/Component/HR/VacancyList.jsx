import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function VacancyList() {
  const [vacancies, setVacancies] = useState([]);

  useEffect(() => {
    const fetchVacancies = async () => {
      try {
        const response = await axios.get("http://localhost:8000/getVacancy");
        setVacancies(response.data);
      } catch (error) {
        console.error("Error fetching vacancies:", error);
      }
    };
    fetchVacancies();
  }, []);

  return (
    <div className="container mx-auto p-4 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">
        Here below is the vacancy list page
      </h1>
      <Link
        to="/"
        className="text-teal-300 p-4 text-center text-2xl rounded-full "
      >
        Home
      </Link>
      <div>
        {vacancies.map((vacancy) => (
          <div key={vacancy.v_id} className="mb-4 p-4  shadow-md rounded">
            <h2 className="text-xl font-bold">{vacancy.Job_Title}</h2>
            <p className="mb-2">
              <strong>Description:</strong> {vacancy.Job_Description}
            </p>
            <p className="mb-2">
              <strong>Required Qualifications:</strong>{" "}
              {vacancy.Required_Qualifications}
            </p>
            <p className="mb-2">
              <strong>Preferred Qualifications:</strong>{" "}
              {vacancy.Preferred_Qualifications}
            </p>
            <p className="mb-2">
              <strong>Application Instructions:</strong>{" "}
              {vacancy.Application_Instructions}
            </p>
            <p className="mb-2">
              <strong>Publish Date:</strong>{" "}
              {new Date(vacancy.Publish_Date).toLocaleDateString()}
            </p>
            <p className="mb-2">
              <strong>Deadline:</strong>{" "}
              {new Date(vacancy.Deadline).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VacancyList;

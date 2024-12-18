import React, { useEffect, useState } from "react";
import axios from "axios";

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("http://localhost:8000/getVacancy");
        setJobs(response.data);
      } catch (error) {
        console.error("Error fetching job listings:", error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">Job Listings</h1>
      <ul className="space-y-4">
        {jobs.map((job) => (
          <li key={job.id} className="border rounded-lg p-4 shadow-md">
            <h2 className="text-xl font-semibold mb-2">{job.Job_Title}</h2>
            <p className="mb-2">
              <strong>Description:</strong> {job.Job_Description}
            </p>
            <p className="mb-2">
              <strong>Required Qualifications:</strong>{" "}
              {job.Required_Qualifications}
            </p>
            <p className="mb-2">
              <strong>Preferred Qualifications:</strong>{" "}
              {job.Preferred_Qualifications}
            </p>
            <p className="mb-2">
              <strong>Application Instructions:</strong>{" "}
              {job.Application_Instructions}
            </p>
            <p className="mb-2">
              <strong>Publish Date:</strong>{" "}
              {new Date(job.Publish_Date).toLocaleDateString()}
            </p>
            <p className="mb-2">
              <strong>Deadline:</strong>{" "}
              {new Date(job.Deadline).toLocaleDateString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default JobList;

import axios from "axios";
import React, { useState } from "react";

const VacancyForm = () => {
  // we can use a usestate Hook to manage its state;
  const [Job_Title, setJobTitle] = useState("");
  const [Job_Description, setJobDescription] = useState("");
  const [Required_Qualifications, setRequiredQualifications] = useState("");
  const [Preferred_Qualifications, setPreferredQualifications] = useState("");
  const [Application_Instructions, setApplicationInstructions] = useState("");
  const [Publish_Date, setPublishDate] = useState("");
  const [Deadline, setDeadlineDate] = useState("");
  const [formSubmitted, setformSubmitted] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({
      Job_Title,
      Job_Description,
      Required_Qualifications,
      Preferred_Qualifications,
      Application_Instructions,
      Publish_Date,
      Deadline,
    });
    try {
      await axios.post("http://localhost:8000/vacancy", {
        Job_Title, // we can rename it as we wish ok man of the God that is possible by using a object
        Job_Description,
        Required_Qualifications,
        Preferred_Qualifications,
        Application_Instructions,
        Publish_Date,
        Deadline,
      });
      alert("submitted successfully !!");
      setApplicationInstructions("");
      setDeadlineDate("");
      setJobDescription("");
      setJobTitle("");
      setPreferredQualifications("");
      setPublishDate("");
      setRequiredQualifications("");
    } catch (error) {
      alert("Not submitted yet ");
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto mt-1">
      <div className="mb-4">
        <label
          htmlFor="jobTitle"
          className="block text-gray-700 font-bold mb-2"
        >
          Job Title
        </label>
        <input
          type="text"
          id="jobTitle"
          value={Job_Title}
          onChange={(e) => setJobTitle(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="jobDescription"
          className="block text-gray-700 font-bold mb-2"
        >
          Job Description
        </label>
        <textarea
          id="jobDescription"
          value={Job_Description}
          onChange={(e) => setJobDescription(e.target.value)}
          rows={4}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="requiredQualifications"
          className="block text-gray-700 font-bold mb-2"
        >
          Required Qualifications
        </label>
        <textarea
          id="requiredQualifications"
          value={Required_Qualifications}
          onChange={(e) => setRequiredQualifications(e.target.value)}
          rows={4}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="preferredQualifications"
          className="block text-gray-700 font-bold mb-2"
        >
          Preferred Qualifications
        </label>
        <textarea
          id="preferredQualifications"
          value={Preferred_Qualifications}
          onChange={(e) => setPreferredQualifications(e.target.value)}
          rows={4}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="applicationInstructions"
          className="block text-gray-700 font-bold mb-2"
        >
          Application Instructions
        </label>
        <textarea
          id="applicationInstructions"
          value={Application_Instructions}
          onChange={(e) => setApplicationInstructions(e.target.value)}
          rows={4}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="publishDate"
          className="block text-gray-700 font-bold mb-2"
        >
          Publish Date
        </label>
        <input
          type="date"
          id="publishDate"
          value={Publish_Date}
          onChange={(e) => setPublishDate(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="Deadline"
          className="block text-gray-700 font-bold mb-2"
        >
          Deadline
        </label>
        <input
          type="date"
          id="Deadline"
          value={Deadline}
          onChange={(e) => setDeadlineDate(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 mb-3 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Post vacancy
      </button>
      {formSubmitted && (
        <p className="bg-zinc-400 mt-3 px-4 py-2 flex-grow">
          form is submitted successfully man{" "}
        </p>
      )}
    </form>
  );
};
export default VacancyForm;

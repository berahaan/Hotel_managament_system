import React, { useEffect, useState } from "react";

function Test() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/feed")
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("Network response was not ok " + resp.statusText);
        }
        return resp.json();
      })
      .then((data) => {
        // console.log(data);
        setData(data);
      })
      .catch((err) => console.log("Error during fetching data ", err));
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className="container w-full mx-2">
      <h1 className="text-2xl bg-gradient-to-r from-blue-200 to-teal-500 ">
        {" "}
        This below is Feedback given by Our Respected Client
      </h1>{" "}
      <br />
      {data.length > 0 ? (
        <ul className="border-t-2 border-green-500 border-b-4 ">
          {data.map((item, index) => (
            <li key={index} className="border-t-2 border-green-500 border-b-4 ">
              <strong>Client:</strong> {item.f_name} <br />
              <strong>Feedback:</strong> {item.f_description} <br />
              <strong>ratings</strong> {item.rating} <br />
            </li>
          ))}
        </ul>
      ) : (
        "Loading..."
      )}
    </div>
  );
}

export default Test;

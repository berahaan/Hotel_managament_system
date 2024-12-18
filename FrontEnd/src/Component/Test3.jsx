import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Eror() {
  return (
    <div>
      Error man please go via right paths
      <ul>
        <li>
          <Link to="/" className="text-teal-400 text-2xl text-pretty">
            BackHome
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Eror;

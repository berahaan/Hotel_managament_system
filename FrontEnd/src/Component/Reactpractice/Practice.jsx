import React, { useState } from "react";
import { createContext } from "react";
import Practice1 from "./Practice1";
export const Usercontext = createContext();
function Practice(props) {
  const [user, setUser] = useState("Birhan");
  return (
    <div>
      {/* for the child components to access this value it should be accessed via usecontext */}
      <h1>
        This is your car in this case man how to lace up your shoes man ? 2
        donkey were got stucked when they are trying to drink from 1 spot
      </h1>

      <Usercontext.Provider value={user}>
        <h2>this is {user}</h2>
      </Usercontext.Provider>
      <Practice1 />
    </div>
  );
}
export default Practice;

import React, { createContext, useState } from "react";
// Create the UserContext
export const UserContext = createContext();
// Create a provider component
export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  return (
    <UserContext.Provider value={{ token, setToken }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserContext;

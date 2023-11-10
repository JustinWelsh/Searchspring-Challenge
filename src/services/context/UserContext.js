import React, { createContext, useState, useContext } from "react";

const UserContext = createContext({});

const UserContextProvider = ({ children }) => {
  const [userSearch, setUserSearch] = useState("");

  return (
    <UserContext.Provider value={{ userSearch, setUserSearch }}>
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => {
  return useContext(UserContext);
};

export { UserContextProvider, useUserContext };

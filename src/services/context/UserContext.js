import React, { createContext, useState, useContext } from "react";

const UserContext = createContext({});

const UserContextProvider = ({ children }) => {
  const [userSearch, setUserSearch] = useState("");
  const [cart, setCart] = useState(0);

  return (
    <UserContext.Provider value={{ userSearch, setUserSearch, cart, setCart }}>
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => {
  return useContext(UserContext);
};

export { UserContextProvider, useUserContext };

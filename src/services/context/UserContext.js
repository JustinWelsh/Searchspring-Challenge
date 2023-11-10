import React, { createContext, useState, useContext } from "react";

const UserContext = createContext({});

const UserContextProvider = ({ children }) => {
  const [userSearch, setUserSearch] = useState("");
  const [cart, setCart] = useState(0);
  const [products, setProducts] = useState([]);

  return (
    <UserContext.Provider
      value={{
        userSearch,
        setUserSearch,
        cart,
        setCart,
        products,
        setProducts,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => {
  return useContext(UserContext);
};

export { UserContextProvider, useUserContext };

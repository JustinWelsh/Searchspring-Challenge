import React, { createContext, useState, useContext } from "react";

const UserContext = createContext({});

const UserContextProvider = ({ children }) => {
  const [userSearch, setUserSearch] = useState("winter");
  const [cart, setCart] = useState(0);
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState({});

  return (
    <UserContext.Provider
      value={{
        userSearch,
        setUserSearch,
        cart,
        setCart,
        products,
        setProducts,
        pagination,
        setPagination,
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

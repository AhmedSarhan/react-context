import { createContext, useContext, useEffect, useState } from "react";

export const AppContext = createContext();

const initialUser = {
  image: "https://placehold.co/400",
  name: "John Doe",
};
export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(initialUser);

  useEffect(() => {
    // fetch api data and set user
  }, []);

  const updateUser = (value) => {
    setUser(value);
  };

  const contextValue = {
    user,
    updateUser,
  };
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error(
      "useAppContext can only be used within the App Context Provider"
    );
  }
  return context;
};

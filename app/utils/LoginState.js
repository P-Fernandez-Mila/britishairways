import React, { createContext, useState } from "react";

const LoginStateContext = createContext();

const LoginStateProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <LoginStateContext.Provider value={[isLogged, setIsLogged]}>
      {" "}
      {children}{" "}
    </LoginStateContext.Provider>
  );
};
export { LoginStateContext, LoginStateProvider };

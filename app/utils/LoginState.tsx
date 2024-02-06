import React, { createContext, useState, ReactNode } from "react";

const LoginStateContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>]
>([false, () => {}]);

const LoginStateProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <LoginStateContext.Provider value={[isLogged, setIsLogged]}>
      {children}
    </LoginStateContext.Provider>
  );
};

export { LoginStateContext, LoginStateProvider };

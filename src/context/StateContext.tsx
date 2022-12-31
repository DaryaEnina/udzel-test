import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";


export type ContextType = {
  activeLogin: boolean,
  setActiveLogin: Dispatch<SetStateAction<boolean>>,
  activeRegistration: boolean,
  setActiveRegistration: Dispatch<SetStateAction<boolean>>,
}
const Context = createContext<ContextType>({
  activeLogin: false,
  setActiveLogin: function (value: React.SetStateAction<boolean>): void {
    throw new Error("Function not implemented.");
  },
  activeRegistration: false,
  setActiveRegistration: function (value: React.SetStateAction<boolean>): void {
    throw new Error("Function not implemented.");
  }
});



interface Props {
  children?: ReactNode;
}

export const StateContext = ({ children }: Props) => {
  const [activeRegistration, setActiveRegistration] = useState(false);
  const [activeLogin, setActiveLogin] = useState(false);
  return (
    <Context.Provider
      value={{
        activeRegistration,
        setActiveRegistration,
        activeLogin,
        setActiveLogin,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);

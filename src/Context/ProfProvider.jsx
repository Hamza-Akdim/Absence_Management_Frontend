import React, { useContext, useState } from "react";
import { createContext } from "react";

const ProfContext = createContext();

const ProfProvider = ({ children }) => {
  const [profId, setProfId] = useState();

  return (
    <ProfContext.Provider value={{ profId, setProfId }}>
      {children}
    </ProfContext.Provider>
  );
};

export const ProfState = ()=>{
    return  useContext(ProfContext);
}

export default ProfProvider;

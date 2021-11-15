import React, { createContext, useState } from "react";
import { dataNoticias } from "../data/dataNoticias";
export const MensajeContext = createContext();
export const NoticiasProvider = ({ children }) => {
  const [noticiasState, setnoticiasState] = useState([]);

  setnoticiasState(dataNoticias);
  return (
    <MensajeContext.Provider value={{ noticiasState }}>
      {children}
    </MensajeContext.Provider>
  );
};

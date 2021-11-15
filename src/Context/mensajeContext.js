import React, { createContext, useReducer, useState } from "react";
const initialstate = { mensajes: [] };
export const MensajeContext = createContext(initialstate);

const types = {
  mensaje: "mensaje",
};

const reducer = (state, action) => {
  switch (action.type) {
    case types.mensaje:
      return {
        ...state,
        mensajes: [...state.mensajes, action.mensaje],
      };

    default:
      return state;
  }
};

export const MensajeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialstate);

  const pushMensaje = (mensaje) => {
    dispatch({ type: types.mensaje, mensaje });
  };

  return (
    <MensajeContext.Provider value={{ mensajes: state.mensajes, pushMensaje }}>
      {children}
    </MensajeContext.Provider>
  );
};

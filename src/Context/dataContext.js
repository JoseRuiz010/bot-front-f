import { React, createContext, useState } from "react";
import { LoginService } from "../components/Service/LoginService";

export const DataContext = createContext();
const url = "https://c785-181-95-217-120.ngrok.io/";
export const DataProvider = ({ children }) => {
  const [isAuth, setisAuth] = useState(false);

  const Login = async (userData) => {
    const { user, contraseña } = userData;
    console.log(user + ", " + contraseña);

    let res = await LoginService.iniciarSesion();
    sessionStorage.setItem("access_token", res.data.access_token);
    console.log(res.data);

    let res2 = await LoginService.getNombre();
    console.log(res2.data);

    /* localStorage.setItem(
      "user",
      JSON.stringify({ user: user, contraseña: contraseña })
    );*/
  };

  return (
    <DataContext.Provider value={{ isAuth, setisAuth, Login, url }}>
      {children}
    </DataContext.Provider>
  );
};

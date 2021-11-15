import axios from "axios";
import { Constants } from "../../Contants";
const url = Constants.url;

const IniciarSesion = async () => {
  console.log("axios");
  return axios({
    method: "post",
    url: url + "auth/login",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    data: {
      username: "agulencina96@gmail.com",
      password: "utn",
    },
  });
};

const getNombre = async () => {
  return axios({
    method: "post",
    url: url + "users/personalData",

    headers: {
      "Access-Control-Allow-Origin": "*",

      Authorization: "Bearer " + sessionStorage.getItem("access_token"),
    },

    data: {
      usuario: {
        legajo: "45165",
        contraseña: "colita463",
      },
    },
  });
};
export const LoginService = {
  iniciarSesion: IniciarSesion,
  getNombre: getNombre,
};

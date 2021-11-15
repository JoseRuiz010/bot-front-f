import axios from "axios";

import { Constants } from "../../Contants";

export const ConsultaService = (mensaje) => {
  const url = Constants.url;
  const token = sessionStorage.getItem("access_token");
  return axios({
    method: "post",
    url: url + "dialogflow/fulfillment",
    headers: {
      "Access-Control-Allow-Origin": "*",
      Authorization: "Bearer " + token,
    },
    data: {
      sessionId: "1234",
      queryInput: {
        text: {
          text: "necesito una constancia de alumno regular",
          languageCode: "es",
        },
      },
    },
  });
};

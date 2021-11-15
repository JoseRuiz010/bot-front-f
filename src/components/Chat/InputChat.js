import {
  IonButton,
  IonCol,
  IonFooter,
  IonIcon,
  IonRow,
  IonTextarea,
} from "@ionic/react";
import React, { useContext, useState } from "react";
import { MensajeContext } from "../../Context/mensajeContext";
import { useFormHook } from "../../CustomHooks/useFormHook";
import { ConsultaService } from "../Service/ConsultaService";
import "./styles.css";
import { v4 as uuidv4 } from "uuid";
import {sendOutline } from "ionicons/icons";

export const InputChat = () => {
  const { pushMensaje } = useContext(MensajeContext);
  const { form, handleForm } = useFormHook("");
  const [loader, setloader] = useState(false);

  const onsubmit = async (e) => {
    e.preventDefault();
    agregarMiChat();
    agregarRespuesta();
  };

  const agregarMiChat = () => {
    const mensaje = {
      id: uuidv4(),
      creador: "yo",
      mensaje: form.mensaje,
      fecha: new Date().toLocaleDateString("es"),
    };
    pushMensaje(mensaje);
    setloader(true);
  };
  const agregarRespuesta = async () => {
    let res = await ConsultaService("hola");
    console.log(res.data.fulfillmentMessages);
    setloader(false);

    for (let i = 0; i < res.data.fulfillmentMessages.length; i++) {
      pushMensaje({
        id: uuidv4(),
        creador: "UTN-BOT",
        mensaje: res.data.fulfillmentMessages[i].text.text[0],
        fecha: new Date().toLocaleDateString("es"),
      });
    }
  };
  const onchange = (e) => {
    console.log(e.target.value);
    handleForm(e);
  };
  return (
    <IonFooter>
      <form onSubmit={(e) => onsubmit}>
        <IonRow align-items-center>
          <IonCol size="10">
            <IonTextarea
              onIonChange={(e) => onchange(e)}
              name="mensaje"
              className="inputChat"
              placeholder="Escribe tu consulta"
              rows={2}
            ></IonTextarea>
          </IonCol>
          <IonCol size="2">
            <IonButton
              onClick={(e) => onsubmit(e)}
              expand="full"
              className="buttonSend"
            >
              <IonIcon icon={sendOutline}></IonIcon>
            </IonButton>
          </IonCol>
        </IonRow>
      </form>
    </IonFooter>
  );
};

import { IonGrid, IonInfiniteScroll, IonRow } from "@ionic/react";
import { useContext } from "react";
import { MensajeContext } from "../../Context/mensajeContext";
import { Mensaje } from "./Mensaje";

export const ContentChat = () => {
  const { mensajes } = useContext(MensajeContext);

  return (
    <>
      <IonGrid>
        <IonRow>
          {mensajes.map((m: any, i: number) =>
            m.creador === "yo" ? (
              <Mensaje
                m={m}
                key={m.id}
                size="9"
                offset="3"
                color="msjCard-blue"
              ></Mensaje>
            ) : (
              <Mensaje
                m={m}
                key={m.id}
                size="9"
                offset="0"
                color="msjCard-gris"
              ></Mensaje>
            )
          )}
        </IonRow>{" "}
      </IonGrid>
      <IonInfiniteScroll position="top"></IonInfiniteScroll>
    </>
  );
};
